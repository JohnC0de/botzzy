import { json, redirect } from "@remix-run/node";
import type { Params } from "@remix-run/react";
import { z } from "zod";

import { api } from "~/server/api";
import { filterControl, getScopedParams, getCredentials } from "~/server/utils";
import { eventSchema, eventTypeSchema } from "../schemas";

const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations/events";
const errorResponse = (path: string, error: any) =>
  json({
    events: [],
    eventTypes: [],
    error: { path, error },
    toast: { type: "error", message: "500 | Ocorreu um erro interno" },
  });

type loaderControllerProps = { request: Request; params: Params<string> };
export async function LoaderController({
  request,
  params,
}: loaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { user, token } = credentials;

  const { id } = params;
  if (!id) return redirect("/v1/protect/integrations");

  const filterParams = getScopedParams(request);
  const filters = filterControl(filterParams, ["per_page", "search"]);

  const eventsURL = `/account/${
    user.account_id
  }/integrationEvents?integration_id=${id}${filters.replace("?", "")}`;
  const eventTypesURL = `/account/${user.account_id}/integrationTypeEvents`;

  const [
    { data: eventsData, error: eventsError },
    { data: eventTypesData, error: eventTypesError },
  ] = await Promise.all([
    await api.GET({ url: eventsURL, token }),
    await api.GET({ url: eventTypesURL, token }),
  ]);

  if (eventsError) return errorResponse(eventsURL, eventsError);
  if (eventTypesError) return errorResponse(eventTypesURL, eventTypesError);

  const validateEvents = z.array(eventSchema).safeParse(eventsData);
  if (!validateEvents.success)
    return errorResponse(eventsURL, validateEvents.error);

  const validateEventTypes = z.array(eventTypeSchema).safeParse(eventTypesData);
  if (!validateEventTypes.success)
    return errorResponse(eventTypesURL, validateEventTypes.error);

  return json({
    events: validateEvents.data,
    eventTypes: validateEventTypes.data,
    toast: null,
  });
}
