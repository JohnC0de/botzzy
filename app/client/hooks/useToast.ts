import { useContext } from "react";
import { ToastContext } from "~/client/contexts";

export function useToast() {
  const value = useContext(ToastContext);
  return value;
}
