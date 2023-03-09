import { redirect } from "react-router";
import { getCredentials } from "~/server/utils";

type loaderControllerProps = { request: Request };
export async function LoaderController({ request }: loaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials !== "notLogged") return redirect("/v1/protect/integrations");
  return null;
}
