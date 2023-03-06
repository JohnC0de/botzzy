import { json } from "@remix-run/node";
import { redirect } from "react-router";
import { api } from "~/server/api";
import { getAccessToken } from "~/server/utils";

type loaderControllerProps = {
  request: Request;
};

const reditectURL = "/auth/signin?redirectURL=/v1/protect/integrations";
export async function LoaderController({ request }: loaderControllerProps) {
  const token = await getAccessToken(request);
  if (token === "notLogged") return redirect(reditectURL);

  const { data: integrations, error } = await api.GET<any>({
    url: "/integrations",
    token,
  });

  if (error) {
    return json({
      integrations: [],
      toast: { type: "error", message: error },
    });
  }

  return json({ integrations, toast: null });
}
