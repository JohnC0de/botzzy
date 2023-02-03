import { SignInModel } from "~/models";

export const meta = SignInModel.meta;

export default function () {
  return <SignInModel.View />;
}
