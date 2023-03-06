import { ErrorLimit } from "~/client/components";
import { ProfileClient } from "~/models";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const meta = ProfileClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return <ProfileClient.View />;
}
