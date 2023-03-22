import { ErrorLimit } from "~/client/components";
import { PasswordModelClient, PasswordModelServer } from "~/models";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const action: ActionFunction = ({ request }) => {
  return PasswordModelServer.ActionController({ request });
};

export const meta = PasswordModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <PasswordModelClient.View />;
}
