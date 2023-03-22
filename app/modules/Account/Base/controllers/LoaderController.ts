import { json, redirect } from "@remix-run/node";
import { z } from "zod";
import { api } from "~/server/api";
import { getCredentials } from "~/server/utils";
import { cardSchema } from "../schema/cardSchema";
import { meSchema } from "../schema/me.server";

const reditectURL = "/auth/signin?redirectURL=/v1/account/profile";
const errorResponse = (path: string, error: any) =>
  json({
    me: null,
    accountInfo: null,
    cards: [],
    error: { path, error },
    toast: { type: "error", message: "500 | Ocorreu um erro interno" },
  });

type loaderControllerProps = { request: Request };
export async function LoaderController({ request }: loaderControllerProps) {
  const credentials = await getCredentials(request);
  if (credentials === "notLogged") return redirect(reditectURL);
  const { token, user } = credentials;

  const url1 = `/me`;
  const url2 = `/account/${user.account_id}/accounts/account-info`;
  const url3 = `/account/${user.account_id}/cardTokens`;
  const [meData, accountData, cardData] = await Promise.all([
    await api.GET({ url: url1, token }),
    await api.GET({ url: url2, token }),
    await api.GET({ url: url3, token }),
  ]);

  if (meData.error) return errorResponse(url1, meData.error);
  if (accountData.error) return errorResponse(url2, accountData.error);
  if (cardData.error) return errorResponse(url3, cardData.error);

  const validateMe = meSchema.safeParse(meData.data);
  if (!validateMe.success) return errorResponse(url1, validateMe.error);

  const validateCards = z.array(cardSchema).safeParse(cardData.data);
  if (!validateCards.success) return errorResponse(url3, validateCards.error);

  return json({
    me: validateMe.data,
    cards: validateCards.data,
    toast: null,
    accountInfo: accountData.data,
  });
}
