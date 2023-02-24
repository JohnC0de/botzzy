import { useContext } from "react";
import { LayoutContext } from "~/client/contexts";

export function useLayout() {
  const value = useContext(LayoutContext);
  return value;
}
