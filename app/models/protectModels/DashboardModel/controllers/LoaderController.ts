import { json, redirect } from "@remix-run/node";
import { getCredentials } from "~/server/utils";

const reditectURL = "/auth/signin?redirectURL=/v1/protect/dashboard";
type loaderControllerProps = { request: Request };
export async function LoaderController({ request }: loaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);

  return json({ toast: null });
}
