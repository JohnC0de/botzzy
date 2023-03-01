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
      primary: { ":hover": { color: vars.colors.primary[500] } },
      danger: { ":hover": { color: vars.colors.danger[500] } },
      warning: { ":hover": { color: vars.colors.warning[500] } },
      success: { ":hover": { color: vars.colors.success[500] } },
      info: { ":hover": { color: vars.colors.info[500] } },
    },
  },
});
