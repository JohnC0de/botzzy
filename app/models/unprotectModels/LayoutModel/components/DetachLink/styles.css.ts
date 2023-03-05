import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const detachLinkContainerStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: vars.space[3],
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontWeight: vars.fontWeights.medium,
    padding: vars.space[2] + vars.space[3],
    borderRadius: vars.radii.xs,
    background: vars.colors.bg[100],
    color: vars.colors.text[500],

    ":hover": {
      background: vars.colors.slate[200],
      color: vars.colors.text[900],
    },
  },

  variants: {
    isActive: {
      true: {
        background: vars.colors.slate[200],
        color: vars.colors.text[900],
      },
    },
  },
});

export const detachLinkIconStyle = style({
  minWidth: "1.5rem",
  minHeight: "1.5rem",
});
