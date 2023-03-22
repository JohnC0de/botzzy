import type {
  ErrorBoundaryComponent,
  LoaderFunction,
  ActionFunction,
} from "@remix-run/node";
import { CrudContextProvider } from "~/client/contexts";
import { ErrorLimit } from "~/client/components";
import { IntegrationsModelClient, IntegrationsModelServer } from "~/models";

export const action: ActionFunction = ({ request }) => {
  return IntegrationsModelServer.ActionController({ request });
};

export const loader: LoaderFunction = ({ request }) => {
  return IntegrationsModelServer.LoaderController({ request });
};

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
