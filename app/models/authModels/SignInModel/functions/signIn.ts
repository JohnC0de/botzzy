import { json, redirect } from "@remix-run/node";
import { z } from "zod";

import { api } from "~/server/api";
import { formControl, getScopedParams } from "~/server/utils";

import { authCookie } from "~/server/cookies";
import type { userDTO } from "../types/userDTO";

type formProps = z.infer<typeof schema>;
type signInProps = { request: Request; formData: { [x: string]: any } };
type apiResponseProps = {
  token: { expiresIn: number; accessToken: string };
  user: userDTO;
};

const errorMessage = "Campo obrigatório";
const schema = z.object({
  email: z.string({ required_error: errorMessage }).min(1, errorMessage),
  password: z.string({ required_error: errorMessage }).min(1, errorMessage),
});

export async function signIn({ request, formData }: signInProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data, success });

  const url = "/login";
  const apiResponse = await api.POST<apiResponseProps>({ url, data });

  if (apiResponse.error || !apiResponse.data) {
    return json({
      error: { path: url, error: apiResponse.error },
      toast: { type: "error", message: apiResponse.error },
    });
  }

  const { getSession, commitSession } = authCookie;
  const session = await getSession(request.headers.get("Cookie"));
  session.set("access_token", apiResponse.data.token.accessToken);
  session.set("user_credentials", {
    ...apiResponse.data.user,
    account_id: apiResponse.data.user.accounts[0].id,
  });

  const scopedParams = getScopedParams(request);
  const redirectURL =
    scopedParams.get("redirectURL") || "/v1/protect/integrations";

  return redirect(redirectURL, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}
