import type { ReactNode } from "react";

export type BadgeProps = {
  children: ReactNode;
  variant: "success" | "warning" | "danger" | "info" | "primary";

  radii?: "px" | "xs" | "sm" | "md" | "lg" | "full";
  space?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64;
  fontSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  fontWeight?: "regular" | "medium" | "bold";
};
