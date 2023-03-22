import { ErrorLimit } from "~/client/components";
import { WhatsappMenuModelClient, WhatsappMenuModelServer } from "~/models";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request, params }) => {
  return WhatsappMenuModelServer.LoaderController({ request, params });
};

export const meta = WhatsappMenuModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <WhatsappMenuModelClient.View />;
}
