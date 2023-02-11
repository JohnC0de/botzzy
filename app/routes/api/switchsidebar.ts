import { sidebarCookie } from "~/server/cookies";
import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const { commitSession, getSession } = sidebarCookie;
  const session = await getSession(request.headers.get("Cookie"));

  const sidebarState = session.get("sidebar");
  session.set("sidebar", sidebarState === "true" ? "false" : "true");

  return new Response(undefined, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};
