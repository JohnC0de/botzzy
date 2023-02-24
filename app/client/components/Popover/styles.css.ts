import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const popoverContainerStyle = style({
  position: "relative",
});

export const contentContainerStyle = recipe({
  base: {
    position: "absolute",
    zIndex: 3,

    backgroundColor: vars.colors.bg[100],
    borderRadius: vars.radii.sm,
  },

  variants: {
    position: {
      "bottom-left": {
        bottom: "-5px",
        right: "0",
        transform: "translateY(100%)",
      },
      "bottom-right": {
        bottom: "-5px",
        left: "0",
        transform: "translateY(100%)",
      },
      "top-left": {
        top: "-5px",
        right: "0",
        transform: "translateY(-100%)",
      },
      "top-right": {
        top: "-5px",
        left: "0",
        transform: "translateY(-100%)",
      },
      bottom: {
        top: "calc(100% + 5px)",
        left: "50%",
        transform: "translateX(-50%)",
      },
      top: {
        bottom: "calc(100% + 5px)",
        left: "50%",
        transform: "translateX(-50%)",
      },
      left: {
        bottom: "50%",
        right: "calc(100% + 5px)",
        transform: "translateY(50%)",
      },
      right: {
        bottom: "50%",
        left: "calc(100% + 5px)",
        transform: "translateY(50%)",
      },
    },
    boxShadow: {
      xs: { boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.1)" },
      sm: { boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.2)" },
      md: { boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.4)" },
      lg: { boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)" },
    },
  },

  defaultVariants: {
    position: "bottom-right",
  },
});

export const popoverOverlayStyle = style({
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});
