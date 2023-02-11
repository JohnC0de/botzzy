import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const contentStyle = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: vars.space[1],
  width: "1.25rem",
  height: "1.25rem",
});

export const span1Style = style({
  height: "2px",
  width: "1rem",
  backgroundColor: vars.colors.text[500],
});

export const span2Style = style({
  height: "2px",
  width: "1.25rem",
  backgroundColor: vars.colors.text[500],
});

export const span3Style = style({
  height: "2px",
  width: "0.75rem",
  backgroundColor: vars.colors.text[500],
});
