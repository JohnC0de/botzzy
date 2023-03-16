import { json, redirect } from "@remix-run/node";
import { api } from "~/server/api";
import { getCredentials } from "~/server/utils";
import { meSchema } from "../schema/me.server";

const reditectURL = "/auth/signin?redirectURL=/v1/account/profile";
const errorResponse = (path: string, error: any) =>
  json({
    me: null,
    error: { path, error },
    toast: { type: "error", message: "500 | Ocorreu um erro interno" },
  });

type loaderControllerProps = { request: Request };
export async function LoaderController({ request }: loaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { token, user } = credentials;

  const url1 = `/me`;
  const url2 = `/account/${user.account_id}/accounts/account-info`;
  const meData = await api.GET({ url: url1, token });
  const accountData = await api.GET({ url: url2, token });

  if (meData.error) return errorResponse(url1, meData.error);

  const validateMe = meSchema.safeParse(meData.data);
  if (!validateMe.success) return errorResponse(url1, validateMe.error);

  return json({
    me: validateMe.data,
    toast: null,
    accountInfo: accountData.data,
  });
}
