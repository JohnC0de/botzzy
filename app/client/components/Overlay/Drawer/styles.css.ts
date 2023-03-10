import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const drawerContentStyle = recipe({
  base: {
    position: "fixed",
    top: 0,
    bottom: 0,
    width: "max-content",
    minWidth: "15rem",
    backgroundColor: vars.colors.bg[100],
    zIndex: 4,
  },

  variants: {
    direction: {
      left: { left: 0 },
      right: { right: 0 },
    },
    showOverlay: {
      false: { boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.2)" },
    },
  },

  defaultVariants: {
    direction: "left",
  },
});

export const drawerHeaderButtonStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    border: "none",
    padding: vars.space[6] + vars.space[8],
    ":hover": { cursor: "pointer" },
  },
  variants: {
    title: { true: { borderBottom: "1px solid " + vars.colors.line } },
  },
});

export const drawerCloseButtonStyle = recipe({
  base: {
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    backgroundColor: "transparent",
    ":hover": { cursor: "pointer" },
  },

  variants: {
    direction: {
      left: { right: "1rem" },
      right: { left: "1rem" },
    },
  },

  defaultVariants: {
    direction: "left",
  },
});

export const drawerOverlayStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 3,
  ":hover": { cursor: "pointer" },
});
