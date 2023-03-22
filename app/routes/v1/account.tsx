import { AccountClient, AccountServer } from "~/modules";
import { ErrorLimit } from "~/client/components";
import type { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";
import { useEffect } from "react";
import { useToast } from "~/client/hooks";
import { useLoaderData } from "@remix-run/react";
import toast from "react-hot-toast";

export const loader: LoaderFunction = ({ request }) => {
  return AccountServer.LoaderController({ request });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaderData.toast]);

  return <AccountClient.View />;
}
