import { redirect } from "@remix-run/node";
import { getCredentials } from "~/server/utils";

type LoaderControllerProps = {
  request: Request;
};

export async function LoaderController({ request }: LoaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials !== "notLogged") return redirect("/v1/protect/integrations");

  return null;
}
