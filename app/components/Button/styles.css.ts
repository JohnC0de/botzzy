import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const buttonStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",

    height: "min-content",
    border: "1px solid transparent",
    outline: "none",
    transition: "all 0.2s",

    ":hover": { cursor: "pointer" },
    ":disabled": { cursor: "not-allowed" },
  },

  variants: {
    variant: {
      default: {
        color: "#FFF",
        background: vars.colors.primary[500],
        selectors: {
          "&:hover:not(:disabled)": { background: vars.colors.primary[300] },
        },
      },
      outline: {
        color: vars.colors.text[500],
        borderColor: vars.colors.line,
        background: "inherit",
        selectors: {
          "&:hover:not(:disabled)": {
            filter: "brightness(0.96)",
            color: vars.colors.primary[300],
          },
        },
      },
      ghost: {
        color: vars.colors.text[500],
        background: "inherit",
        selectors: { "&:hover:not(:disabled)": { filter: "brightness(0.96)" } },
      },
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
  },

  defaultVariants: {
    fontSize: "md",
    space: 3,
    radii: "xs",
    fontWeight: "bold",
    variant: "default",
  },
});
