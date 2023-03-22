import { SignUpServer, SignUpClient } from "~/modules";
import { ErrorLimit } from "~/client/components";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const meta = SignUpClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export const action: ActionFunction = async ({ request }) => {
  return await SignUpServer.ActionController({ request });
};

export default function App() {
  return <SignUpClient.View />;
}
