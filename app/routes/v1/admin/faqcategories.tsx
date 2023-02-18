import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  ErrorBoundaryComponent,
} from "@remix-run/node";

import { Treatment } from "~/client/treatment";
import { FaqCategoriesAdminClient, FaqCategoriesAdminServer } from "~/models";

export const action: ActionFunction = async ({ request }) => {
  return await FaqCategoriesAdminServer.ActionController({ request });
};
export const loader: LoaderFunction = async ({ request }) => {
  return await FaqCategoriesAdminServer.LoaderController({ request });
};

export const meta: MetaFunction = FaqCategoriesAdminClient.meta;
export const ErrorBoundary: ErrorBoundaryComponent = Treatment;

export default function () {
  return <FaqCategoriesAdminClient.View />;
}
