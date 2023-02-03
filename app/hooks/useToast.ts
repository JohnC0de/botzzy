import { useContext } from "react";
import { ToastContext } from "~/client/context";

export function useToast() {
  const value = useContext(ToastContext);
  return value;
}
