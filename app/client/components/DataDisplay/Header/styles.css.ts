import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "min-content",
});

export const titleStyle = recipe({
  base: {
    fontWeight: vars.fontWeights.extraBold,
    color: vars.colors.text[900],
    lineHeight: vars.lineHeights.short,
  },

  variants: {
    fontSize: {
      xxs: { fontSize: vars.fontSizes.xxs },
      xs: { fontSize: vars.fontSizes.xs },
      sm: { fontSize: vars.fontSizes.sm },
      md: { fontSize: vars.fontSizes.md },
      lg: { fontSize: vars.fontSizes.lg },
      xl: { fontSize: vars.fontSizes.xl },
      "2xl": { fontSize: vars.fontSizes["2xl"] },
    },
  },

  defaultVariants: {
    fontSize: "2xl",
  },
});

export const subTitleStyle = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  lineHeight: vars.lineHeights.short,
  marginTop: vars.space[1],
  color: vars.colors.text[100],
});

export const contentStyle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
});
