import type { ActionFunction } from "@remix-run/node";
import { themeCookie } from "~/server/cookies";

export const action: ActionFunction = async ({ request }) => {
  const { commitSession, getSession } = themeCookie;
  const session = await getSession(request.headers.get("Cookie"));

  const themeState = session.get("theme");
  session.set("theme", themeState === "dark" ? "light" : "dark");

  return new Response(undefined, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};
