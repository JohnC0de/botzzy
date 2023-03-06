import { redirect } from "react-router";
import { getAccessToken } from "~/server/utils";

type loaderControllerProps = {
  request: Request;
};

const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations";
export async function LoaderController({ request }: loaderControllerProps) {
  const token = await getAccessToken(request);
  if (token === "notLogged") return redirect(reditectURL);
  return null;
}
