import { AuthBaseClient, AuthBaseServer } from "~/modules";
import { ErrorLimit } from "~/client/components";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  return await AuthBaseServer.LoaderController({ request });
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <AuthBaseClient.View />;
}
