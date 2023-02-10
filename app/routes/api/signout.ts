import { authCookie } from "~/server/cookies";
import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const { destroySession, getSession } = authCookie;

  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/auth/signin", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
};
