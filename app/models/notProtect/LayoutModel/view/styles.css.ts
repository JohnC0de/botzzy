import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const viewContainerStyle = style({
  display: "flex",
});

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],

  background: vars.colors.bg[100],
  maxHeight: "4rem",
  flex: 1,
  padding: vars.space[3],
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});
