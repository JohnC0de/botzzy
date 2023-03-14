import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";
import { CrudContextProvider } from "~/client/contexts";
import { ErrorLimit } from "~/client/components";
import { ChannelsModelClient, ChannelsModelServer } from "~/models";

export const loader: LoaderFunction = ({ request }) => {
  return ChannelsModelServer.LoaderController({ request });
};

export const meta = ChannelsModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return (
    <CrudContextProvider>
      <ChannelsModelClient.View />
    </CrudContextProvider>
  );
}
