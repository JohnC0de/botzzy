import type {
  ErrorBoundaryComponent,
  LoaderFunction,
  ActionFunction,
} from "@remix-run/node";
import { CrudContextProvider } from "~/client/contexts";
import { ErrorLimit } from "~/client/components";
import { EventsModelClient, EventsModelServer } from "~/models";

export const action: ActionFunction = ({ request, params }) => {
  return EventsModelServer.ActionController({ request, params });
};

export const loader: LoaderFunction = ({ request, params }) => {
  return EventsModelServer.LoaderController({ request, params });
};

export const meta = EventsModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return (
    <CrudContextProvider>
      <EventsModelClient.View />
    </CrudContextProvider>
  );
}
