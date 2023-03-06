import { redirect } from "react-router";

import { getAccessToken } from "~/server/utils";
import { signIn } from "../functions/signIn";

type ActionControllerProps = { request: Request };
export async function ActionController({ request }: ActionControllerProps) {
  const tokenExists = await getAccessToken(request);
  if (tokenExists !== "notLogged") return redirect("/v1/protect/integrations");

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    case "sign-in":
      return await signIn({ request, formData });
    default:
      return null;
  }
}
