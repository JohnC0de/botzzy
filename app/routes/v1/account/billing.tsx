import { ErrorLimit } from "~/client/components";
import { BillingClient } from "~/models";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const meta = BillingClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <BillingClient.View />;
}
