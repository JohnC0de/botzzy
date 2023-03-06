import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const errorBoundaryContainer = style({
  margin: vars.space[4],
  flex: 1,
});

export const errorBoundaryHeading = style({
  color: vars.colors.red[500],
  whiteSpace: "nowrap",
  marginBottom: vars.space[2],
});

export const errorBoundaryAside = style({
  display: "flex",
  height: "1px",
  background: vars.colors.red[500],
  margin: `${vars.space[4]} 0`,
});

export const errorBoundaryStrong = style({
  display: "block",
  color: vars.colors.red[500],
  background: vars.colors.bg[100],
  padding: vars.space[4],
  borderRadius: vars.radii.px,
});

export const errorBoundaryCode = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  fontFamily: vars.fonts.code,
  color: vars.colors.text[500],
});

export const errorBoundaryAncora = style({
  color: vars.colors.red[500],
  paddingLeft: vars.space[2],
});
