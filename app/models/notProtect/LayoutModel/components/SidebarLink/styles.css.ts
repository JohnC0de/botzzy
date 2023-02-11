import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const linkStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    padding: "0 " + vars.space[2],
    textDecoration: "none",
    gap: vars.space[4],
    overflow: "hidden",
    borderRadius: vars.radii.xs,
    backgroundColor: vars.colors.bg[100],
    ":hover": { filter: "brightness(0.92)" },
    transition: "all 0.2s",
  },

  variants: {
    isActive: {
      true: { filter: "brightness(0.92)" },
    },
  },
});

export const svgContainerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  minHeight: "3rem",
  minWidth: "3rem",
});

export const svgStyle = recipe({
  base: {
    fontSize: "22px",
  },

  variants: {
    isActive: {
      true: { color: vars.colors.primary[500] },
      false: { color: vars.colors.text[500] },
    },
  },
});

export const textStyle = recipe({
  base: {
    fontSize: vars.fontSizes.lg,
    fontWeight: vars.fontWeights.medium,
    color: vars.colors.text[500],
  },
  variants: {
    isActive: {
      true: { color: vars.colors.primary[500] },
      false: { color: vars.colors.text[500] },
    },
  },
});
