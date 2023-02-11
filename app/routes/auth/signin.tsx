import { SignInModel } from "~/models";
import { Treatment } from "~/client/treatment";
import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
} from "@remix-run/node";

export const meta = SignInModel.meta;
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <Treatment error={error} />
);

export const action: ActionFunction = async ({ request }) => {
  return await SignInModel.ActionController({ request });
};

export const loader: LoaderFunction = ({ request }) => {
  return SignInModel.LoaderController({ request });
};

export default function App() {
  return <SignInModel.View />;
}
