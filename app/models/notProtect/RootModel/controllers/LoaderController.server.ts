import { authCookie, sidebarCookie, themeCookie } from "~/server/cookies";

type loaderControllerProps = {
  request: Request;
};

export async function LoaderController({ request }: loaderControllerProps) {
  const authSession = await authCookie.getSession(
    request.headers.get("Cookie")
  );
  const sidebarSession = await sidebarCookie.getSession(
    request.headers.get("Cookie")
  );
  const themeSession = await themeCookie.getSession(
    request.headers.get("Cookie")
  );

  const authState = authSession.get("user_credentials");
  const sidebarState = sidebarSession.get("sidebar");
  const themeState = themeSession.get("theme");

  return {
    user: authState || "notLogged",
    theme: themeState || "dark",
    sidebar: sidebarState || "open",
  };
}
