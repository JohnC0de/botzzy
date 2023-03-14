import { json, redirect } from "@remix-run/node";
import { z } from "zod";

import { api } from "~/server/api";
import { filterControl, getScopedParams, getCredentials } from "~/server/utils";
import { integrationSchema, integrationTypeSchema } from "../schemas";

const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations";
const errorResponse = (path: string, error: any) =>
  json({
    integrations: [],
    integrationTypes: [],
    error: { path, error },
    toast: { type: "error", message: "500 | Ocorreu um erro interno" },
  });

type loaderControllerProps = { request: Request };
export async function LoaderController({ request }: loaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { user, token } = credentials;

  const filterParams = getScopedParams(request);
  const filters = filterControl(filterParams, ["per_page", "search"]);

  const integrationsURL = `/account/${user.account_id}/integrations${filters}`;
  const integrationTypesURL = `/account/${user.account_id}/integrationTypes`;

  const [
    { data: integrationsData, error: integrationsError },
    { data: integrationTypesData, error: integrationTypesError },
  ] = await Promise.all([
    await api.GET({ url: integrationsURL, token }),
    await api.GET({ url: integrationTypesURL, token }),
  ]);

  if (integrationsError)
    return errorResponse(integrationsURL, integrationsError);
  if (integrationTypesError)
    return errorResponse(integrationTypesURL, integrationTypesError);

  const validateIntegrations = z
    .array(integrationSchema)
    .safeParse(integrationsData);
  if (!validateIntegrations.success)
    return errorResponse(integrationsURL, validateIntegrations.error);

  const validateIntegrationTypes = z
    .array(integrationTypeSchema)
    .safeParse(integrationTypesData);
  if (!validateIntegrationTypes.success) {
    return errorResponse(integrationTypesURL, validateIntegrationTypes.error);
  }

  return json({
    integrations: validateIntegrations.data,
    integrationTypes: validateIntegrationTypes.data,
    toast: null,
  });
}
