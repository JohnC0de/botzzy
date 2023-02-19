import { ClientOnly } from "remix-utils";

import { FlowClient } from "~/models";
import { Spinner } from "~/client/components";
import { Treatment } from "~/client/treatment";

import type { ErrorBoundaryComponent } from "@remix-run/node";
import { ReactFlowProvider } from "reactflow";

export const links = FlowClient.links;
export const meta = FlowClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export default function () {
  return (
    <ClientOnly
      fallback={
        <main
          style={{
            width: "100vw",
            height: "calc(100vh - 4rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Spinner /> Carregando seu Flow...
        </main>
      }
    >
      {() => (
        <ReactFlowProvider>
          <FlowClient.View />
        </ReactFlowProvider>
      )}
    </ClientOnly>
  );
}
