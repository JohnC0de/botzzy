import {
  SignUpAffiliateModelServer,
  SignUpAffiliateModelClient,
} from "~/models";
import { ErrorLimit } from "~/client/components";
import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
} from "@remix-run/node";

export const meta = SignUpAffiliateModelClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export const action: ActionFunction = async ({ request }) => {
  return await SignUpAffiliateModelServer.ActionController({ request });
};

export const loader: LoaderFunction = ({ request }) => {
  return SignUpAffiliateModelServer.LoaderController({ request });
};

export default function App() {
  return <SignUpAffiliateModelClient.View />;
}
