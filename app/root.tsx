import { RootModel } from "./models";
import { Treatment } from "./client/treatment";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const links = RootModel.links;
export const meta = RootModel.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export default function App() {
  return <RootModel.View />;
}
