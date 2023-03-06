import { redirect } from "react-router";
import { getAccessToken } from "~/server/utils";

type loaderControllerProps = {
  request: Request;
};

export async function LoaderController({ request }: loaderControllerProps) {
  const token = await getAccessToken(request);
  if (token !== "notLogged") return redirect("/v1/protect/integrations");
  return null;
}
