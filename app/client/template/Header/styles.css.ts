import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  height: "min-content",
  padding: "0 !important",
  flex: 1,
});

export const titleStyle = style({
  fontSize: "1.75rem",
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
