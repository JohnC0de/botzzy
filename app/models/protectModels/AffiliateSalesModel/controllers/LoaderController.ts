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
  const { data, error } = await api.GET<any>({ url, token });
  if (error) {
    return json({
      sales: [],
      totalComission: "R$ 0,00",
      totalSales: "R$ 0,00",
      error: { url, error },
      toast: { type: "error", message: "500 | Ocorreu um erro interno" },
    });
  }

  const validateSales = z.array(salesSchema).safeParse(data);
  if (!validateSales.success) {
    return json({
      sales: [],
      totalComission: "R$ 0,00",
      totalSales: "R$ 0,00",
      error: { url, error: validateSales.error },
      toast: { type: "error", message: "500 | Ocorreu um erro interno" },
    });
  }

  let totalSales = 0;
  let totalComission = 0;
  data.forEach((item: any) => (totalSales += Number(item.amount)));
  data.forEach((item: any) => (totalComission += Number(item.comission)));

  return json({
    sales: validateSales.data,
    totalSales: totalSales.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    totalComission: totalComission.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    toast: null,
  });
}
