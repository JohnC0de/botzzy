import { forgot } from "../functions/forgot";

type ActionControllerProps = { request: Request };
export async function ActionController({ request }: ActionControllerProps) {
  const formData = Object.fromEntries(await request.formData());

  switch (formData._action) {
    case "forgot":
      return await forgot({ formData });
    default:
      return null;
  }
}
