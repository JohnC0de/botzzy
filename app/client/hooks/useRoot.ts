import { useRouteLoaderData } from "@remix-run/react";
import type { userDTO } from "~/models/authModels/SignInModel/types/userDTO";

type rootProps = {
  theme: "dark" | "light";
  user: userDTO;
};

export function useRoot() {
  const rootLoaderData = useRouteLoaderData("root") as rootProps;
  return { ...rootLoaderData };
}
