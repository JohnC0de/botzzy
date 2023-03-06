import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";

export const navigateLinkMenuStyle = style({
  display: "flex",
  alignItems: "center",
  gap: globalStyles.vars.space[2],

  color: globalStyles.vars.colors.text[500],
  textDecoration: "none",
  ":hover": {
    color: globalStyles.vars.colors.indigo[500],
  },
});
