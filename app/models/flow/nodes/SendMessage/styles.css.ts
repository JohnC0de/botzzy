import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const sendMessageNodeContainer = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: vars.colors.bg[100],
  gap: vars.space[6],

  borderRadius: vars.radii.sm,
  padding: vars.space[4],
});

export const imageStyle = style({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: vars.radii.sm,
});

export const messageZone = style({
  width: "250px",

  backgroundColor: vars.colors.bg[500],
  borderRadius: vars.radii.sm,
  padding: vars.space[2],
});
