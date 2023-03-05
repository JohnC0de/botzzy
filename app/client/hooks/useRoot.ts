import { useRouteLoaderData } from "@remix-run/react";
import type { userProps } from "~/models/authModels/SignInModel/functions/signIn";

type rootProps = {
  theme: "dark" | "light";
  user: userProps;
};

export function useRoot() {
  const rootLoaderData = useRouteLoaderData("root") as rootProps;
  return { ...rootLoaderData };
}
