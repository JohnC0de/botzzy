import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface TableButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  variant: "warning" | "danger" | "success" | "info" | "primary";
}
