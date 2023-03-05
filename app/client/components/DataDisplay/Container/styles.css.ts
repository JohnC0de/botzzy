import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[6],
  padding: vars.space[6] + vars.space[8],
  overflow: "auto",
  height: "calc(100vh - 4rem)",
});
