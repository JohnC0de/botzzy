import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const popoverContainerStyle = style({
  position: "relative",
});

export const contentContainerStyle = style({
  position: "absolute",
  bottom: "-5px",
  left: "0",

  transform: "translateY(100%)",
  zIndex: 2,

  backgroundColor: vars.colors.bg[100],
  borderRadius: vars.radii.sm,
});

export const popoverOverlayStyle = style({
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});
