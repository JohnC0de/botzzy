import { json, redirect } from "@remix-run/node";
import type { Params } from "@remix-run/react";
import { z } from "zod";

import { api } from "~/server/api";
import { getCredentials } from "~/server/utils";
import { channelSchema } from "../schema/channelSchema";

const reditectURL = "/auth/signin?redirectURL=/v1/protect/channels";
const errorResponse = (path: string, error: any) =>
  json({
    channel: null,
    error: { path, error },
    toast: { type: "error", message: "500 | Ocorreu um erro interno" },
  });

type loaderControllerProps = { request: Request; params: Params<string> };
export async function WhatsappLoaderController({
  request,
  params,
}: loaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { user, token } = credentials;

  const { id } = params;
  if (!id) return redirect("/v1/protect/channels");

  const containersURL = `/account/${user.account_id}/containers/${id}`;

  const [{ data, error }] = await Promise.all([
    await api.GET({ url: containersURL, token }),
  ]);
  if (error) return errorResponse(containersURL, error);

  // const validateChannels = z.array(channelSchema).safeParse(data);
  // if (!validateChannels.success)
  //   return errorResponse(containersURL, validateChannels.error);

  return json({
    channel: data,
    toast: null,
  });
}
