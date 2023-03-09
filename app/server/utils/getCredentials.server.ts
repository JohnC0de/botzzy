import { authCookie } from "../cookies";
import type { userDTO } from "~/models/authModels/SignInModel/types/userDTO";

export async function getCredentials(request: Request) {
  const session = await authCookie.getSession(request.headers.get("Cookie"));
  const token = session.get("access_token") as string;
  const user = session.get("user_credentials") as userDTO;

  if (!token || !user) return "notLogged";
  return { user, token };
}
