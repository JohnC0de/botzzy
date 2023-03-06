import { ErrorLimit } from "~/client/components";
import { PasswordClient } from "~/models";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const meta = PasswordClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <PasswordClient.View />;
}
