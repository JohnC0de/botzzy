import { ForgotServer, ForgotClient } from "~/models";
import { Treatment } from "~/client/treatment";
import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
} from "@remix-run/node";

export const meta = ForgotClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export const action: ActionFunction = async ({ request }) => {
  return await ForgotServer.ActionController({ request });
};

export const loader: LoaderFunction = ({ request }) => {
  return ForgotServer.LoaderController({ request });
};

export default function App() {
  return <ForgotClient.View />;
}
