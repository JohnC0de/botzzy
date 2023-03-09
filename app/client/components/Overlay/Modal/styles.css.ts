import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const modalContainerStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  overflow: "auto",
  padding: vars.space[4],
  zIndex: 9999,
});

export const modalContentStyle = style({
  borderRadius: vars.radii.xs,
  width: "max-content",
  height: "max-content",
  backgroundColor: vars.colors.bg[100],
  zIndex: 4,
  minWidth: "300px",
});

export const modalContentHeaderStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space[6],
  borderBottom: "1px solid " + vars.colors.line,
});

export const modalContentHeaderButtonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
  ":hover": { cursor: "pointer" },
});

export const modalOverlayStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 3,
  ":hover": { cursor: "pointer" },
});
