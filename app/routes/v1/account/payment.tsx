import { ErrorLimit } from "~/client/components";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <h1>payment</h1>;
}
