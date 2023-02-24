import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const buttonStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "2.5rem",
    width: "3rem",

    border: "none",
    borderRadius: vars.radii.xs,

    transition: "all 0.2s",
    ":hover": { background: vars.colors.primary[700] },
  },

  variants: {
    isActive: {
      false: { background: "inherit" },
      true: { background: vars.colors.primary[700] },
    },
  },
});
