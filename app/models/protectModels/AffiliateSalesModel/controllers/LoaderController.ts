import { json, redirect } from "@remix-run/node";
import { z } from "zod";

import { api } from "~/server/api";
import { filterControl, getScopedParams, getCredentials } from "~/server/utils";
import { salesSchema } from "../schemas";

const reditectURL = "/auth/signin?redirectURL=/v1/protect/sales";

type loaderControllerProps = { request: Request };
export async function LoaderController({ request }: loaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { token } = credentials;

  const filterParams = getScopedParams(request);
  const filters = filterControl(filterParams, ["per_page", "search"]);

  const url = `/affiliate/sales${filters}`;
  const { data, error } = await api.GET({ url, token });
  if (error) {
    return json({
      sales: [],
      error: { url, error },
      toast: { type: "error", message: "500 | Ocorreu um erro interno" },
    });
  }

  const validateSales = z.array(salesSchema).safeParse(data);
  if (!validateSales.success) {
    return json({
      sales: [],
      error: { url, error: validateSales.error },
      toast: { type: "error", message: "500 | Ocorreu um erro interno" },
    });
  }

  return json({
    sales: validateSales.data,
    toast: null,
  });
}
