import { RootClient, RootServer } from "./models";
import { ErrorLimit } from "./client/components";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";

export const links = RootClient.links;
export const meta = RootClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export const loader: LoaderFunction = ({ request }) => {
  return RootServer.LoaderController({ request });
};

export default function App() {
  return <RootClient.View />;
}
