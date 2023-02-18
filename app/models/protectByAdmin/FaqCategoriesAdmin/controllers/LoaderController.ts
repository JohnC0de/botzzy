import { json, redirect } from "@remix-run/node";
import { api } from "~/server/api";
import { getAccessToken } from "~/server/utils";

type LoaderControllerProps = { request: Request };

export async function LoaderController({ request }: LoaderControllerProps) {
  const token = await getAccessToken(request);
  if (token === "notLogged") return redirect("/auth/signin");

  const url = "/faqCategorys";
  const apiResponse = await api.GET<any>({ url, token });

  if (apiResponse.error)
    return json({
      toast: { type: "error", message: apiResponse.error.message },
      faqCategories: { responseData: [], count: 0 },
    });

  return json({
    toast: null,
    faqCategories: {
      responseData: apiResponse.data.data,
      count: apiResponse.data.meta.totalItems,
    },
  });
}
