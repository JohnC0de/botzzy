import { createCookieSessionStorage } from "@remix-run/node";

export const authCookie = createCookieSessionStorage({
  cookie: {
    name: "remix:acess_token",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1B0ok"],
    secure: false,
  },
});
