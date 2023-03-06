import type { HTMLAttributes } from "react";

export type TagProps = HTMLAttributes<HTMLElement>;
export interface CardProps extends TagProps {
  as?: "section" | "aside" | "div";
  showBgColor?: boolean;
  direction?: "row" | "column";
  radii?: "px" | "xs" | "sm" | "md" | "lg" | "full";
  space?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80;
  spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80;
  boxShadow?: "xs" | "sm" | "md" | "lg";
  bordered?: "full" | "bottom" | "left" | "right" | "top";
  align?:
    | "normal"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "baseline"
    | "initial"
    | "inherit";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  wrap?:
    | "initial"
    | "inherit"
    | "-moz-initial"
    | "revert"
    | "revert-layer"
    | "unset"
    | "nowrap"
    | "wrap"
    | "wrap-reverse"
    | undefined;
}
