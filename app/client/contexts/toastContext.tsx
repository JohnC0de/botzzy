import { createContext } from "react";
import { Icons } from "../icons";
import toast, { Toaster } from "react-hot-toast";

import { globalStyles } from "../styles";
import type { ReactNode } from "react";

type FireToastProps = {
  type: "error" | "info" | "success" | "warning";
  message: string;
};

type ToastContextProps = {
  fireToast: (props: FireToastProps) => void;
};

type CrudContextProviderProps = {
  children: ReactNode;
};

export const ToastContext = createContext({} as ToastContextProps);

export function ToastContextProvider({ children }: CrudContextProviderProps) {
  const { vars } = globalStyles;

  function fireToast(props: FireToastProps) {
    switch (props.type) {
      case "info":
        toast(props.message, {
          icon: <Icons.InfoCircle size={24} />,
          style: {
            backgroundColor: vars.colors.cyan[100],
            fontWeight: vars.fontWeights.medium,
            color: vars.colors.cyan[500],
          },
        });
        break;

      case "success":
        toast(props.message, {
          icon: <Icons.CheckCircle size={24} />,
          style: {
            backgroundColor: vars.colors.emerald[100],
            fontWeight: vars.fontWeights.medium,
            color: vars.colors.emerald[500],
          },
        });
        break;

      case "error":
        toast(props.message, {
          icon: <Icons.XCircle size={24} />,
          style: {
            backgroundColor: vars.colors.red[100],
            fontWeight: vars.fontWeights.medium,
            color: vars.colors.red[500],
          },
        });
        break;

      case "warning":
        toast(props.message, {
          icon: <Icons.AlertCircle size={24} />,
          style: {
            backgroundColor: vars.colors.yellow[100],
            fontWeight: vars.fontWeights.medium,
            color: vars.colors.yellow[500],
            textAlign: "center",
          },
        });
        break;
    }
  }

  return (
    <ToastContext.Provider value={{ fireToast }}>
      <Toaster
        position="top-right"
        toastOptions={{ style: { borderRadius: "4px" } }}
      />
      {children}
    </ToastContext.Provider>
  );
}
