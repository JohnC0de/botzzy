import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;
export const creditContainerStyle = style({
  display: "flex",
  alignItems: "center",
  background: vars.colors.bg[100],

  gap: vars.space[4],
  padding: vars.space[4],
});
