import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const spinnerStyle = recipe({
  base: {
    display: "block",
    borderRadius: vars.radii.full,
    border: "3px solid " + vars.colors.line,
    borderTopColor: vars.colors.text[500],
  },

  variants: {
    size: {
      xxs: { height: "0.5rem", width: "0.5rem" },
      xs: { height: "0.75rem", width: "0.75rem" },
      sm: { height: "1rem", width: "1rem" },
      md: { height: "1.25rem", width: "1.25rem" },
      lg: { height: "1.5rem", width: "1.5rem" },
      xl: { height: "1.75rem", width: "1.75rem" },
      "2xl": { height: "2rem", width: "2rem" },
    },

    colorful: {
      colored: {
        border: "3px solid " + vars.colors.indigo[700],
        borderTopColor: "#FFFFFF",
      },
      unColored: {
        border: "3px solid " + vars.colors.line,
        borderTopColor: vars.colors.text[500],
      },
    },
  },

  defaultVariants: {
    size: "md",
    colorful: "unColored",
  },
});
