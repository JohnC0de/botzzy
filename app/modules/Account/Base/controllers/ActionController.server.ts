import { redirect } from "@remix-run/node";
import { getCredentials } from "~/server/utils";

import {
  addCreditCard,
  updateBillingInformation,
  updatePassword,
  updateProfile,
} from "../functions";

type ActionControllerProps = { request: Request };

export async function ActionController({ request }: ActionControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect("/auth/signin");

  const { token, user } = credentials;
  if (!user.account_id) return null;

  const formData = Object.fromEntries(await request.formData());
  const account_id = user.account_id;

  switch (formData._action) {
    case "updateBillingInformation":
      return await updateBillingInformation({ formData, token, account_id });
    case "addCreditCard":
      return await addCreditCard({ account_id, formData, token });
    case "updateProfile":
      return await updateProfile({ formData, token });
    case "updatePassword":
      return await updatePassword({ formData, token });
    default:
      return null;
  }
}
