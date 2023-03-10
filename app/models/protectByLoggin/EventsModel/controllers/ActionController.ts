import { redirect } from "@remix-run/node";
import type { Params } from "@remix-run/react";
import { getCredentials } from "~/server/utils";
import { createEvent, deleteEvent, updateEvent } from "../functions";

type ActionControllerProps = { request: Request; params: Params<string> };
const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations/events";
export async function ActionController({
  request,
  params,
}: ActionControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { user, token } = credentials;

  const account_id = user.account_id;
  const { id } = params;
  if (!account_id || !id) return null;

  const formData = Object.fromEntries(await request.formData());
  switch (formData._action) {
    case "createEvent":
      return await createEvent({ formData, token, account_id, id });
    case "deleteEvent":
      return await deleteEvent({ formData, token, account_id });
    case "updateEvent":
      return await updateEvent({ formData, token, account_id, id });
    default:
      return null;
  }
}
