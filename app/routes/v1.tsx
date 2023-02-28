import { LayoutClient } from "~/models";
import { Treatment } from "~/client/treatment";
import { LayoutContextProvider } from "~/client/contexts";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export default function () {
  return (
    <LayoutContextProvider>
      <LayoutClient.View />
    </LayoutContextProvider>
  );
}
