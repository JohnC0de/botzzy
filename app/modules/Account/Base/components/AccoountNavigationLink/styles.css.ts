import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;
export const accountNavigationLinkStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    justifyContent: "center",
    minHeight: "3rem",
    minWidth: "6rem",
    padding: "0 " + vars.space[4],
    color: vars.colors.text[500],
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes.sm,
    borderBottom: "2px solid transparent",
  },
  variants: {
    isActive: {
      true: {
        color: vars.colors.text[900],
        borderBottomColor: vars.colors.indigo[500],
      },
    },
  },
});
