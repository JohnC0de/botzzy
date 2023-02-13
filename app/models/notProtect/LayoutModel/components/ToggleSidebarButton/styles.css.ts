import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.space[1],

  width: "2.5rem",
  height: "1.25rem",
});

export const lineStyle = style({
  height: "2px",
  width: "1.25rem",
  backgroundColor: vars.colors.text[500],
});
