import type { InputHTMLAttributes } from "react";

export interface InputTypes
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  variant?: "default" | "outline" | "ghost";
  radii?: "px" | "xs" | "sm" | "md" | "lg" | "full";
  space?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80;
  fontSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  fontWeight?: "regular" | "medium" | "bold";
  label?: string;
  error?: string | null;
}
