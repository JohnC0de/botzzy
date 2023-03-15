import { json, redirect } from "@remix-run/node";
import { z } from "zod";

import { api } from "~/server/api";
import { filterControl, getScopedParams, getCredentials } from "~/server/utils";
import { channelSchema } from "../schema/channelSchema";

const reditectURL = "/auth/signin?redirectURL=/v1/protect/channels";
const errorResponse = (path: string, error: any) =>
  json({
    channels: [],
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

  const containersURL = `/account/${user.account_id}/containers${filters}`;

  const [{ data, error }] = await Promise.all([
    await api.GET({ url: containersURL, token }),
  ]);

  if (error) return errorResponse(containersURL, error);

  const validateChannels = z.array(channelSchema).safeParse(data);
  if (!validateChannels.success)
    return errorResponse(containersURL, validateChannels.error);

  return json({
    channels: validateChannels.data,
    toast: null,
  });
}
