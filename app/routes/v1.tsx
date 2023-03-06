import { LayoutClient } from "~/models";
import { ErrorLimit } from "~/client/components";
import { LayoutContextProvider } from "~/client/contexts";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return (
    <LayoutContextProvider>
      <LayoutClient.View />
    </LayoutContextProvider>
  );
}
