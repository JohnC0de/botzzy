import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const menuContainerStyle = style({
  position: "relative",
});

export const optionContainerStyle = style({
  position: "absolute",
  bottom: "-5px",
  left: "0",

  transform: "translateY(100%)",
  zIndex: 2,

  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],

  backgroundColor: vars.colors.bg[100],
  padding: vars.space[2],
  borderRadius: vars.radii.sm,
});

export const menuOverlayStyle = style({
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

export const optionStyle = style({
  display: "flex",
  alignItems: "center",
});
