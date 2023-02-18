import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  height: "min-content",
  flex: 1,
  padding: vars.space[3],
});

export const titleStyle = style({
  fontSize: "1.75rem",
  lineHeight: vars.lineHeights.short,
});

export const contentStyle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
});
