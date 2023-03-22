import { ClientOnly } from "remix-utils";

import { FlowClient } from "~/models";
import { Spinner } from "~/client/components";
import { ErrorLimit } from "~/client/components";

import { ReactFlowProvider } from "reactflow";
import { FlowContextProvider } from "~/models/protectModels/FlowModel/hook/useFlow";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const links = FlowClient.links;
export const meta = FlowClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  return (
    <ClientOnly
      fallback={
        <main
          style={{
            flex: 1,
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
          <FlowContextProvider>
            <FlowClient.View />
          </FlowContextProvider>
        </ReactFlowProvider>
      )}
    </ClientOnly>
  );
}
