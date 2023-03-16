import { ErrorLimit } from "~/client/components";
import { BillingClientModel, BillingServerModel } from "~/models";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const action: ActionFunction = ({ request }) => {
  return BillingServerModel.ActionController({ request });
};

export const meta = BillingClientModel.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <BillingClientModel.View />;
}
