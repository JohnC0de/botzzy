import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const badgeStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "min-content",
    width: "min-content",
    whiteSpace: "nowrap",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.primary[50],
        color: vars.colors.primary[500],
      },
      success: {
        backgroundColor: vars.colors.success[50],
        color: vars.colors.success[500],
      },
      info: {},
      danger: {
        backgroundColor: vars.colors.danger[50],
        color: vars.colors.danger[500],
      },
      warning: {
        backgroundColor: vars.colors.warning[50],
        color: vars.colors.warning[500],
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
      1: { padding: vars.space[1] + vars.space[2] },
      2: { padding: vars.space[2] + vars.space[3] },
      3: { padding: vars.space[3] + vars.space[4] },
      4: { padding: vars.space[4] + vars.space[5] },
      5: { padding: vars.space[5] + vars.space[6] },
      6: { padding: vars.space[6] + vars.space[7] },
      7: { padding: vars.space[7] + vars.space[8] },
      8: { padding: vars.space[8] + vars.space[10] },
      10: { padding: vars.space[10] + vars.space[12] },
      12: { padding: vars.space[12] + vars.space[16] },
      16: { padding: vars.space[16] + vars.space[20] },
      20: { padding: vars.space[20] + vars.space[40] },
      40: { padding: vars.space[40] + vars.space[64] },
      64: { padding: vars.space[64] + vars.space[80] },
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
    fontSize: "sm",
    space: 2,
    radii: "lg",
    fontWeight: "bold",
    variant: "primary",
  },
});
