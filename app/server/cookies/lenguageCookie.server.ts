import { createCookieSessionStorage } from "@remix-run/node";

export const lenguageCookie = createCookieSessionStorage({
  cookie: {
    name: "remix:lenguage",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1B0ok"],
    secure: false,
  },
});
