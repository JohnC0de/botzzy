import { json, redirect } from "@remix-run/node";
import { z } from "zod";

import { api } from "~/server/api";
import { formControl, getScopedParams } from "~/server/utils";

import { authCookie } from "~/server/cookies";

type formProps = z.infer<typeof schema>;
type signInProps = { request: Request; formData: { [x: string]: any } };

export type userProps = {
  createdAt: string;
  email: string;
  id: number;
  nome: string | null;
  phone: string;
  role: string;
  updatedAt: string;
};

type apiResponseProps = {
  token: { expiresIn: number; accessToken: string };
  user: userProps;
};

const errorMessage = "Campo obrigatório";
const schema = z.object({
  email: z.string({ required_error: errorMessage }).min(1, errorMessage),
  password: z.string({ required_error: errorMessage }).min(1, errorMessage),
});

export async function signIn({ request, formData }: signInProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data, success });

  const url = "auth/login";
  const apiResponse = await api.POST<apiResponseProps>({ url, data });

  if (apiResponse.error) {
    return json({
      error: { path: url, error: apiResponse.error },
      toast: { type: "error", message: apiResponse.error.message },
    });
  }

  const { getSession, commitSession } = authCookie;
  const session = await getSession(request.headers.get("Cookie"));
  session.set("acess_token", apiResponse.data?.token.accessToken);
  session.set("user_credentials", apiResponse.data?.user);

  const scopedParams = getScopedParams(request);
  const redirectURL = scopedParams.get("redirectURL") || "/v1/test";

  return redirect(redirectURL, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}
