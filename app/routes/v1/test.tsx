import type { ErrorBoundaryComponent } from "@remix-run/node";
import { Treatment } from "~/client/treatment";
import { CrudExampleClient } from "~/models";

export const meta = CrudExampleClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export default function () {
  return <CrudExampleClient.View />;
}
