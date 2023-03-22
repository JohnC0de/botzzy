import { json, redirect } from "@remix-run/node";
import type { z } from "zod";

import { api } from "~/server/api";
import { formControl, getScopedParams } from "~/server/utils";
import { authCookie } from "~/server/cookies";

import type { userDTO } from "../../_types";
import { signInForm } from "../../_schema/signInForm";

type formProps = z.infer<typeof signInForm>;
type signInProps = { request: Request; formData: { [x: string]: any } };
type signInResponse = {
  token: { expiresIn: number; accessToken: string };
  user: userDTO;
};

export async function signIn({ request, formData }: signInProps) {
  const { data, success } = await formControl<formProps>(formData, signInForm);
  if (!success) return json({ error: data, success });

  const url = "/login";
  const { data: signInData, error: signInError } =
    await api.POST<signInResponse>({ url, data });

  if (signInError || !signInData) {
    return json({
      error: { path: url, error: signInError },
      toast: { type: "error", message: signInError },
    });
  }

  const { getSession, commitSession } = authCookie;
  const session = await getSession(request.headers.get("Cookie"));

  session.set("access_token", signInData.token.accessToken);
  session.set("user_credentials", {
    ...signInData.user,
    account_id: signInData.user.accounts[0].id,
  });

  const scopedParams = getScopedParams(request);
  const redirectURL =
    scopedParams.get("redirectURL") || "/v1/protect/integrations";

  return redirect(redirectURL, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}
