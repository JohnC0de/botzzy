import { ErrorLimit } from "~/client/components";
import { WhatsaooQRCodeModelClient, WhatsaooQRCodeModelServer } from "~/models";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const action: ActionFunction = ({ request, params }) => {
  return WhatsaooQRCodeModelServer.ActionController({ request });
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <WhatsaooQRCodeModelClient.View />;
}
