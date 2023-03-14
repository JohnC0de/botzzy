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
  fireToast: (props: FireToastProps) => string;
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
        return toast(props.message, {
          icon: <Icons.InfoCircle size={24} />,
          style: {
            backgroundColor: vars.colors.cyan[50],
            fontWeight: vars.fontWeights.medium,
            color: vars.colors.cyan[500],
          },
        });

      case "success":
        return toast(props.message, {
          icon: <Icons.CheckCircle size={24} />,
          style: {
            backgroundColor: vars.colors.emerald[50],
            fontWeight: vars.fontWeights.medium,
            color: vars.colors.emerald[500],
          },
        });

      case "error":
        return toast(props.message, {
          icon: <Icons.XCircle size={24} />,
          style: {
            backgroundColor: vars.colors.red[50],
            fontWeight: vars.fontWeights.medium,
            color: vars.colors.red[500],
          },
        });

      case "warning":
        return toast(props.message, {
          icon: <Icons.AlertCircle size={24} />,
          style: {
            backgroundColor: vars.colors.yellow[50],
            fontWeight: vars.fontWeights.medium,
            color: vars.colors.yellow[500],
            textAlign: "center",
          },
        });
    }
  }

  return (
    <ToastContext.Provider value={{ fireToast }}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 9999,
            borderRadius: "4px",
          },
        }}
      />
      {children}
    </ToastContext.Provider>
  );
}
