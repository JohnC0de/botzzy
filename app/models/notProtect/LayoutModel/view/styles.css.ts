import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const viewContainerStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  background: vars.colors.bg[100],
  padding: vars.space[3],
});

export const contentStyle = style({ display: "flex", flex: 1 });
