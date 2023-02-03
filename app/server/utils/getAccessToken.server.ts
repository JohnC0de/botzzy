import { authCookie } from "../cookies";

export async function getAccessToken(request: Request) {
  const session = await authCookie.getSession(request.headers.get("Cookie"));
  const acess_token = session.get("acess_token") as string;

  if (!acess_token) return "notLogged";
  return acess_token;
}
