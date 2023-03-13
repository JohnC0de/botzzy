import { ErrorLimit } from "~/client/components";
import { ProfileModelClient, ProfileModelServer } from "~/models";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const action: ActionFunction = ({ request }) => {
  return ProfileModelServer.ActionController({ request });
};

export const meta = ProfileModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <ProfileModelClient.View />;
}
