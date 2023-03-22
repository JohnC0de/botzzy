import { redirect } from "@remix-run/node";

import { getCredentials } from "~/server/utils";
import { signUp } from "../functions";

type ActionControllerProps = { request: Request };
export async function ActionController({ request }: ActionControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials !== "notLogged") return redirect("/v1/protect/integrations");

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    case "sign-up":
      return await signUp({ request, formData });
    default:
      return null;
  }
}
