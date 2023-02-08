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
    zIndex: 2,

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
