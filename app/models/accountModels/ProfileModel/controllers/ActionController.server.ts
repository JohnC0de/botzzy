import { redirect } from "@remix-run/node";
import { getAccessToken } from "~/server/utils";

type ActionControllerProps = { request: Request };
export async function ActionController({ request }: ActionControllerProps) {
  const tokenExists = await getAccessToken(request);
  if (tokenExists !== "notLogged") return redirect("/v1/protect/integrations");

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    default:
      return null;
  }
}
