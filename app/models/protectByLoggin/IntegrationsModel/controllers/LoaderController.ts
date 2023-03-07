import { json } from "@remix-run/node";
import { redirect } from "react-router";
import { z } from "zod";
import { api } from "~/server/api";
import { getAccessToken } from "~/server/utils";
import { integrationSchema } from "../types/IntegrationDTO";

type loaderControllerProps = { request: Request };
const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations";

export async function LoaderController({ request }: loaderControllerProps) {
  const token = await getAccessToken(request);
  if (token === "notLogged") return redirect(reditectURL);

  const url = "/hotmartProducts";
  const { data, error } = await api.GET({ url, token });

  if (error) {
    return json({
      integrations: [],
      toast: { type: "error", message: error },
    });
  }

  const validateIntegrations = z.array(integrationSchema).safeParse(data);
  if (!validateIntegrations.success) {
    return json({
      integrations: [],
      error: { path: url, error: validateIntegrations.error },
      toast: {
        type: "error",
        message: "400 | Dados recebidos inválidos",
      },
    });
  }

  return json({ integrations: validateIntegrations.data, toast: null });
}
