import toast from "react-hot-toast";
import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import type {
  ActionFunction,
  ErrorBoundaryComponent,
  LoaderFunction,
} from "@remix-run/node";

import { AccountBaseClient, AccountBaseServer } from "~/modules";
import { ErrorLimit } from "~/client/components";
import { useToast } from "~/client/hooks";

export const action: ActionFunction = ({ request }) => {
  return AccountBaseServer.ActionController({ request });
};

export const loader: LoaderFunction = ({ request }) => {
  return AccountBaseServer.LoaderController({ request });
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => (
  <ErrorLimit error={error} />
);

export default function () {
  const loaderData = useLoaderData();
  const { fireToast } = useToast();

  useEffect(() => {
    const myToast = loaderData?.toast ? fireToast(loaderData.toast) : null;
    return () => {
      myToast && toast.remove(myToast);
    };
  }, [fireToast, loaderData.toast]);

  return <AccountBaseClient.View />;
}
