import { useContext } from "react";
import { CrudContext } from "../contexts";

export function useCrud() {
  const value = useContext(CrudContext);
  return value;
}
