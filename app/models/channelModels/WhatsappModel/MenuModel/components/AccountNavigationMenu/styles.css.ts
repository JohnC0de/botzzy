import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;
export const navigationContainerStyle = style({
  display: "flex",
  alignItems: "center",
  minHeight: "3rem",
  flex: 1,
  borderBottom: `1px solid ${vars.colors.line}`,
});
