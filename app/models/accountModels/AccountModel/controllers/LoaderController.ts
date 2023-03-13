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
  const { token } = credentials;

  const url = `/me`;
  const { data, error } = await api.GET({ url, token });
  if (error) return errorResponse(url, error);

  const validateMe = meSchema.safeParse(data);
  if (!validateMe.success) return errorResponse(url, validateMe.error);

  return json({ me: validateMe.data, toast: null });
}
