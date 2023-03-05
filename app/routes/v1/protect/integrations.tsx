import type { ErrorBoundaryComponent } from "@remix-run/node";
import { CrudContextProvider } from "~/client/contexts";
import { Treatment } from "~/client/treatment";

import { IntegrationsModelClient } from "~/models";

export const meta = IntegrationsModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export default function () {
  return (
    <CrudContextProvider>
      <IntegrationsModelClient.View />
    </CrudContextProvider>
  );
}
