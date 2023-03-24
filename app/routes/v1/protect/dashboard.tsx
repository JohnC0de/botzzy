import { CrudContextProvider } from "~/client/contexts";
import { ErrorLimit } from "~/client/components";
import { DashboardModelClient, DashboardModelServer } from "~/models";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request }) => {
  return DashboardModelServer.LoaderController({ request });
};

export const meta = DashboardModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return (
    <CrudContextProvider>
      <DashboardModelClient.View />
    </CrudContextProvider>
  );
}
