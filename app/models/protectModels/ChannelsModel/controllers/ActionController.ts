import { redirect } from "@remix-run/node";
import { getCredentials } from "~/server/utils";

import { createChannel, deleteChannel } from "../functions";

type ActionControllerProps = { request: Request };
const reditectURL = "/auth/signin?redirectURL=/v1/protect/channels";
export async function ActionController({ request }: ActionControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { user, token } = credentials;

  const account_id = user.account_id;
  if (!account_id) return null;

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    case "createChannel":
      return await createChannel({ formData, token, account_id });
    case "deleteChannel":
      return await deleteChannel({ formData, token, account_id });
    default:
      return null;
  }
}
