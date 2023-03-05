import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const tableButtonContainerStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    color: vars.colors.text[500],
    ":hover": { cursor: "pointer" },
  },
  variants: {
    variant: {
      primary: { ":hover": { color: vars.colors.indigo[500] } },
      danger: { ":hover": { color: vars.colors.red[500] } },
      warning: { ":hover": { color: vars.colors.yellow[500] } },
      success: { ":hover": { color: vars.colors.emerald[500] } },
      info: { ":hover": { color: vars.colors.cyan[500] } },
    },
  },
});
