import { createCookieSessionStorage } from "@remix-run/node";

export const themeCookie = createCookieSessionStorage({
  cookie: {
    name: "remix:theme",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1B0ok"],
    secure: false,
  },
});
