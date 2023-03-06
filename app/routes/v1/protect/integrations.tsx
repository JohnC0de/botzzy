import type { ErrorBoundaryComponent } from "@remix-run/node";
import { CrudContextProvider } from "~/client/contexts";
import { ErrorLimit } from "~/client/components";

import { IntegrationsModelClient } from "~/models";

export const meta = IntegrationsModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return (
    <CrudContextProvider>
      <IntegrationsModelClient.View />
    </CrudContextProvider>
  );
}
