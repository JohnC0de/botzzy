import { redirect } from "@remix-run/node";
import { getCredentials } from "~/server/utils";
import { addCreditCard } from "../functions/addCreditCard.server";

import { updateBillingInformation } from "../functions/update.server";

type ActionControllerProps = { request: Request };
const reditectURL = "/auth/signin?redirectURL=/v1/account/profile";
export async function ActionController({ request }: ActionControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { token, user } = credentials;

  if (!user.account_id) return null;

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    case "updateBillingInformation":
      return await updateBillingInformation({
        formData,
        token,
        account_id: user.account_id,
      });
    case "addCreditCard":
      return await addCreditCard({
        account_id: user.account_id,
        formData,
        token,
      });
    default:
      return null;
  }
}
