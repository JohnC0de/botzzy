import { json, redirect } from "@remix-run/node";
import type { Params } from "@remix-run/react";
import { z } from "zod";

import { api } from "~/server/api";
import { filterControl, getScopedParams, getCredentials } from "~/server/utils";
import { eventSchema, eventTypeSchema, integrationSchema } from "../schemas";

const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations/events";
const errorResponse = (path: string, error: any) =>
  json({
    events: [],
    eventTypes: [],
    integration: null,
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

  const integrationURL = `/account/${user.account_id}/integrations/${id}`;
  const eventTypesURL = `/account/${user.account_id}/integrationTypeEvents`;
  const eventsURL = `/account/${
    user.account_id
  }/integrationEvents?integration_id=${id}${filters.replace("?", "")}`;

  const [
    { data: eventsData, error: eventsError },
    { data: eventTypesData, error: eventTypesError },
    { data: integrationData, error: integrationError },
  ] = await Promise.all([
    await api.GET({ url: eventsURL, token }),
    await api.GET({ url: eventTypesURL, token }),
    await api.GET({ url: integrationURL, token }),
  ]);

  console.log(eventTypesData);

  if (eventsError) return errorResponse(eventsURL, eventsError);
  if (eventTypesError) return errorResponse(eventTypesURL, eventTypesError);
  if (eventTypesError) return errorResponse(integrationURL, integrationError);

  const validateEvents = z.array(eventSchema).safeParse(eventsData);
  if (!validateEvents.success)
    return errorResponse(eventsURL, validateEvents.error);

  const validateEventTypes = z.array(eventTypeSchema).safeParse(eventTypesData);
  if (!validateEventTypes.success)
    return errorResponse(eventTypesURL, validateEventTypes.error);

  const validateIntegration = integrationSchema.safeParse(integrationData);
  if (!validateIntegration.success)
    return errorResponse(eventTypesURL, validateIntegration.error);

  return json({
    events: validateEvents.data,
    eventTypes: validateEventTypes.data,
    integration: validateIntegration.data,
    toast: null,
  });
}
