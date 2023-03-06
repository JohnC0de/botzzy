import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "min-content",
});

export const titleStyle = style({
  fontSize: "1.5rem",
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text[900],
  lineHeight: vars.lineHeights.short,
});

export const subTitleStyle = style({
  fontSize: "1rem",
  fontWeight: vars.fontWeights.medium,
  lineHeight: vars.lineHeights.short,
});

export const contentStyle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
});
