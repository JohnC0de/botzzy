import { redirect } from "@remix-run/node";
import { getAccessToken } from "~/server/utils";
import {
  createIntegration,
  deleteIntegration,
  updateIntegration,
} from "../functions";

type ActionControllerProps = { request: Request };
export async function ActionController({ request }: ActionControllerProps) {
  const token = await getAccessToken(request);
  if (token === "notLogged") return redirect("/auth/signin");

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    case "createIntegration":
      return await createIntegration({ formData, token });
    case "deleteIntegration":
      return await deleteIntegration({ formData, token });
    case "updateIntegration":
      return await updateIntegration({ formData, token });
    default:
      return null;
  }
}
