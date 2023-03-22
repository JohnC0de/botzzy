import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
} from "@remix-run/node";
import { CrudContextProvider } from "~/client/contexts";
import { ErrorLimit } from "~/client/components";
import { AllChannelsModelClient, AllChannelsModelServer } from "~/models";

export const action: ActionFunction = async ({ request }) => {
  return await AllChannelsModelServer.ActionController({ request });
};

export const loader: LoaderFunction = ({ request }) => {
  return AllChannelsModelServer.LoaderController({ request });
};

export const meta = AllChannelsModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return (
    <CrudContextProvider>
      <AllChannelsModelClient.View />
    </CrudContextProvider>
  );
}
