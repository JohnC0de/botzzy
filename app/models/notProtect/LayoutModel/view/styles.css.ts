import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const viewContainerStyle = style({
  display: "flex",
});

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.1)",
  gap: vars.space[1],

  background: vars.colors.bg[100],
  maxHeight: "4rem",
  flex: 1,
  padding: vars.space[3],
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "initial",
  flex: 1,
});
