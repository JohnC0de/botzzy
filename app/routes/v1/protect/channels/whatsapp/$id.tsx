import { ErrorLimit } from "~/client/components";
import { ChannelsModelClient, ChannelsModelServer } from "~/models";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request, params }) => {
  return ChannelsModelServer.WhatsappLoaderController({ request, params });
};

export const meta = ChannelsModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <ChannelsModelClient.WhatsappView />;
}
