import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const smallStyle = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text[100],
  whiteSpace: "nowrap",
  fontWeight: vars.fontWeights.medium,
  marginTop: vars.space[2],
});
