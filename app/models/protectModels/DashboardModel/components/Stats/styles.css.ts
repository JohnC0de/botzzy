import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;
export const statsContainerStyle = style({
  display: "flex",
  alignItems: "center",
  padding: vars.space[4],
  gap: vars.space[4],
  flex: 1,

  border: `1px solid ${vars.colors.line}`,
  borderRadius: vars.radii.xs,
  backgroundColor: vars.colors.bg[100],
});

export const titleStyle = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text[900],
  marginBottom: "0.8rem",
});

export const contentContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  flex: 1,
  whiteSpace: "nowrap",
});
