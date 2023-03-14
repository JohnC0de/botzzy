import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const drawerContentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  background: "inherit",
  padding: vars.space[6],
});

export const draggableNodeStyle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[4],
  minWidth: "18rem",
  background: "inherit",
  padding: vars.space[3] + vars.space[5],
  fontWeight: vars.fontWeights.medium,
  transition: "all 0.1s",
  ":hover": {
    cursor: "grab",
    filter: "brightness(0.9)",
  },
});
