import { useRouteLoaderData } from "@remix-run/react";
import type { userDTO } from "~/modules/Auth/_types";

type rootProps = {
  theme: "dark" | "light";
  user: userDTO;
  lenguage: "en" | "pt-br";
};

export function useRoot() {
  const rootLoaderData = useRouteLoaderData("root") as rootProps;
  return { ...rootLoaderData };
}
