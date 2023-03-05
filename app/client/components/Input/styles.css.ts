import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const inputContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
});

export const labelStyle = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.text[500],
  fontFamily: vars.fonts.default,
});

export const inputStyle = recipe({
  base: {
    color: vars.colors.text[500],
    border: "1px solid transparent",
    outline: "none",
    fontFamily: vars.fonts.default,
    background: "transparent",
    "::placeholder": { color: vars.colors.slate[400] },
  },

  variants: {
    variant: {
      default: {
        backgroundColor: vars.colors.line,
        ":focus": {
          borderColor: vars.colors.indigo[500],
          outline: "1px solid " + vars.colors.indigo[500],
        },
      },
      outline: {
        borderColor: vars.colors.line,
        ":focus": {
          borderColor: vars.colors.indigo[500],
          outline: "1px solid " + vars.colors.indigo[500],
        },
      },
      ghost: {},
    },
    fontWeight: {
      regular: { fontWeight: vars.fontWeights.regular },
      medium: { fontWeight: vars.fontWeights.medium },
      bold: { fontWeight: vars.fontWeights.bold },
    },
    fontSize: {
      xxs: { fontSize: vars.fontSizes.xxs },
      xs: { fontSize: vars.fontSizes.xs },
      sm: { fontSize: vars.fontSizes.sm },
      md: { fontSize: vars.fontSizes.md },
      lg: { fontSize: vars.fontSizes.lg },
      xl: { fontSize: vars.fontSizes.xl },
      "2xl": { fontSize: vars.fontSizes["2xl"] },
    },
    space: {
      1: { padding: vars.space[1] },
      2: { padding: vars.space[2] },

      3: { padding: vars.space[3] },
      4: { padding: vars.space[4] },
      5: { padding: vars.space[5] },
      6: { padding: vars.space[6] },
      7: { padding: vars.space[7] },
      8: { padding: vars.space[8] },
      10: { padding: vars.space[10] },
      12: { padding: vars.space[12] },
      16: { padding: vars.space[16] },
      20: { padding: vars.space[20] },
      40: { padding: vars.space[40] },
      64: { padding: vars.space[64] },
      80: { padding: vars.space[80] },
    },
    radii: {
      px: { borderRadius: vars.radii.px },
      xs: { borderRadius: vars.radii.xs },
      sm: { borderRadius: vars.radii.sm },
      md: { borderRadius: vars.radii.md },
      lg: { borderRadius: vars.radii.lg },
      full: { borderRadius: vars.radii.full },
    },
    isError: {
      true: {
        borderColor: vars.colors.red[500],
        outline: "1px solid " + vars.colors.red[500],
      },
    },
  },

  defaultVariants: {
    fontSize: "md",
    space: 3,
    radii: "xs",
    fontWeight: "medium",
    variant: "outline",
  },
});

export const errorInputStyle = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.red[500],
});
