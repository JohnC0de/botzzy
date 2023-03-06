import { useContext } from "react";
import { IsBotContext } from "../contexts";

export function useIsBot() {
  const value = useContext(IsBotContext);
  return value;
}
