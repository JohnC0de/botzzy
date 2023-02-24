import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const detachMenuContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  background: vars.colors.bg[100],
  overflow: "hidden",
  borderRight: "1px solid " + vars.colors.line,
});

export const detachMenuHeaderStyle = style({
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "inherit",
  padding: "0 " + vars.space[4] + " 0 " + vars.space[6],
});

export const detachMenuContentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  padding: "1rem",
});
