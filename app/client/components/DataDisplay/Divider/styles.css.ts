import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const dividerStyle = style({
  flex: 1,
  width: "100%",
  minHeight: "1px",
  background: vars.colors.line,
});
