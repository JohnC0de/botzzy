import { ForgotServer, ForgotClient } from "~/modules";
import { ErrorLimit } from "~/client/components";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const meta = ForgotClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export const action: ActionFunction = async ({ request }) => {
  return await ForgotServer.ActionController({ request });
};

export default function App() {
  return <ForgotClient.View />;
}
