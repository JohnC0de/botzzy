import { ErrorLimit } from "~/client/components";
import { BillingClient, BillingServer } from "~/modules";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const action: ActionFunction = ({ request }) => {
  return BillingServer.ActionController({ request });
};

export const meta = BillingClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <BillingClient.View />;
}
