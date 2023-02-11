import { signInFunction } from "../functions/signIn";

type ActionControllerProps = { request: Request };
export async function ActionController({ request }: ActionControllerProps) {
  const formData = Object.fromEntries(await request.formData());

  switch (formData._action) {
    case "sign-in":
      return await signInFunction({ request, formData });
    default:
      return null;
  }
}
