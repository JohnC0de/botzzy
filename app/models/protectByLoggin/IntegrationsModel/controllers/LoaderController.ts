import { json } from "@remix-run/node";
import { redirect } from "react-router";
import { z } from "zod";
import { api } from "~/server/api";
import {
  filterControl,
  getAccessToken,
  getScopedParams,
  getUserCredentials,
} from "~/server/utils";
import { integrationSchema } from "../types/IntegrationDTO";
import { integrationTypeSchema } from "../types/IntegrationTypeDTO";

type loaderControllerProps = { request: Request };
const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations";

export async function LoaderController({ request }: loaderControllerProps) {
  const token = await getAccessToken(request);
  const user = await getUserCredentials(request);
  if (user === "notLogged" || token === "notLogged") {
    return redirect(reditectURL);
  }

  const filterParams = getScopedParams(request);
  const filters = filterControl(filterParams, ["per_page", "search"]);

  const integrationsURL = `/account/${user.account_id}/integrations${filters}`;
  const integrations = await api.GET({ url: integrationsURL, token });
  if (integrations.error) {
    return json({
      integrations: [],
      integrationTypes: [],
      error: { path: integrationsURL, error: integrations.error },
      toast: { type: "error", message: "500 | Ocorreu um erro interno" },
    });
  }

  const validateIntegrations = z
    .array(integrationSchema)
    .safeParse(integrations.data);
  if (!validateIntegrations.success) {
    return json({
      integrations: [],
      integrationTypes: [],
      error: { path: integrationsURL, error: validateIntegrations.error },
      toast: {
        type: "error",
        message: "400 | Dados recebidos inválidos",
      },
    });
  }

  const integrationsTypeURL = `/account/${user.account_id}/integrationTypes`;
  const integrationsType = await api.GET({ url: integrationsTypeURL, token });
  if (integrationsType.error) {
    return json({
      integrations: [],
      integrationTypes: [],
      error: { path: integrationsTypeURL, error: integrationsType.error },
      toast: { type: "error", message: "500 | Ocorreu um erro interno" },
    });
  }

  const validateIntegrationTypes = z
    .array(integrationTypeSchema)
    .safeParse(integrationsType.data);
  if (!validateIntegrationTypes.success) {
    return json({
      integrations: [],
      integrationTypes: [],
      error: {
        path: integrationsTypeURL,
        error: validateIntegrationTypes.error,
      },
      toast: {
        type: "error",
        message: "400 | Dados recebidos inválidos",
      },
    });
  }

  return json({
    integrations: validateIntegrations.data,
    integrationTypes: validateIntegrationTypes.data,
    toast: null,
  });
}
