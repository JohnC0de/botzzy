import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;

export const tableTh = style({
  textAlign: "start",
});

export const tableTd = style({
  padding: vars.space[4] + " 0",
  background: vars.colors.bg[100],
});
