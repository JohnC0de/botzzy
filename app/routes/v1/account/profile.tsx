import { ErrorLimit } from "~/client/components";
import { ProfileClient, ProfileServer } from "~/modules";
import type { ActionFunction, ErrorBoundaryComponent } from "@remix-run/node";

export const action: ActionFunction = ({ request }) => {
  return ProfileServer.ActionController({ request });
};

export const meta = ProfileClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <ProfileClient.View />;
}
