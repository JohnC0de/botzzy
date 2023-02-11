import { useRouteLoaderData } from "@remix-run/react";
import type { userProps } from "~/models/auth/SignInModel/functions/signIn";

type rootProps = {
  theme: "dark" | "light";
  sidebar: "true" | "false";
  user: userProps;
};

export function useRoot() {
  const rootLoaderData = useRouteLoaderData("root") as rootProps;
  return { ...rootLoaderData };
}
