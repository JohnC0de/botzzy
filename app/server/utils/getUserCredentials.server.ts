import { authCookie } from "../cookies";

export async function getUserCredentials(request: Request) {
  const session = await authCookie.getSession(request.headers.get("Cookie"));
  const user = session.get("user_credentials") as any;

  if (!user) return "notLogged";
  return user;
}
