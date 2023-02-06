import { Treatment } from "~/client/treatment";
import { ExampleModel } from "~/models";
import type { ErrorBoundaryComponent } from "@remix-run/node";

export const meta = ExampleModel.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export default function () {
  return <ExampleModel.View />;
}
