import { Treatment } from "~/client/treatment";
import { SignInModel } from "~/models";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const meta = SignInModel.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export default function () {
  return <SignInModel.View />;
}
