import { ErrorLimit } from "~/client/components";
import { BillingClient } from "~/modules";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <BillingClient.View />;
}
