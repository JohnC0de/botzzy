import type { ActionFunction } from "@remix-run/node";
import { lenguageCookie } from "~/server/cookies";

export const action: ActionFunction = async ({ request }) => {
  const { commitSession, getSession } = lenguageCookie;
  const session = await getSession(request.headers.get("Cookie"));
  const lenguage = (await request.formData()).get("lenguage")?.toString();

  session.set("lenguage", lenguage ? lenguage : "pt-br");

  return new Response(undefined, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};
