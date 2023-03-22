import { SignInServer, SignInClient } from "~/modules";
import { ErrorLimit } from "~/client/components";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const meta = SignInClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export const action: ActionFunction = async ({ request }) => {
  return await SignInServer.ActionController({ request });
};

export default function App() {
  return <SignInClient.View />;
}
