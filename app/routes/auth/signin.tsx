import { SignInModel } from "~/models";
import { Treatment } from "~/client/treatment";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const meta = SignInModel.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export default function App() {
  return <SignInModel.View />;
}
