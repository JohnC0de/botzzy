import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const drawerContentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  background: "inherit",
  padding: vars.space[3],
});

export const draggableNodeStyle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[4],
  minWidth: "15rem",
  background: "inherit",
  padding: vars.space[3] + vars.space[5],
  borderRadius: vars.radii.xs,
  fontWeight: vars.fontWeights.medium,
  transition: "all 0.1s",
  ":hover": {
    filter: "brightness(0.9)",
  },
});
