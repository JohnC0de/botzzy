import { redirect } from "@remix-run/node";
import { getAccessToken, getUserCredentials } from "~/server/utils";
import {
  createIntegration,
  deleteIntegration,
  updateIntegration,
} from "../functions";

type ActionControllerProps = { request: Request };
const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations";
export async function ActionController({ request }: ActionControllerProps) {
  const token = await getAccessToken(request);
  const user = await getUserCredentials(request);
  if (user === "notLogged" || token === "notLogged") {
    return redirect(reditectURL);
  }

  const account_id = user.account_id;
  if (!account_id) return null;

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    case "createIntegration":
      return await createIntegration({ formData, token, account_id });
    case "deleteIntegration":
      return await deleteIntegration({ formData, token, account_id });
    case "updateIntegration":
      return await updateIntegration({ formData, token, account_id });
    default:
      return null;
  }
}
