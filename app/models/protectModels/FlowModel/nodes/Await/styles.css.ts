import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const awaitNodeContainer = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: vars.colors.bg[100],
  gap: vars.space[6],

  borderRadius: vars.radii.sm,
  padding: vars.space[4],
});
