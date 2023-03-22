import { ErrorLimit } from "~/client/components";
import { PasswordClient, PasswordServer } from "~/modules";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const action: ActionFunction = ({ request }) => {
  return PasswordServer.ActionController({ request });
};

export const meta = PasswordClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <PasswordClient.View />;
}
