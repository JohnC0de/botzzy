import { redirect } from "@remix-run/node";
import { getCredentials } from "~/server/utils";

import { updatePassword } from "../functions";

type ActionControllerProps = { request: Request };
const reditectURL = "/auth/signin?redirectURL=/v1/account/profile";
export async function ActionController({ request }: ActionControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { token } = credentials;

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    case "updatePassword":
      return await updatePassword({ formData, token });
    default:
      return null;
  }
}
