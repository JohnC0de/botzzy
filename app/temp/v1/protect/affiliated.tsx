import { CrudContextProvider } from "~/client/contexts";
import { ErrorLimit } from "~/client/components";
import { AffiliateSalesModelClient, AffiliateSalesModelServer } from "~/models";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request }) => {
  return AffiliateSalesModelServer.LoaderController({ request });
};

export const meta = AffiliateSalesModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return (
    <CrudContextProvider>
      <AffiliateSalesModelClient.View />
    </CrudContextProvider>
  );
}
