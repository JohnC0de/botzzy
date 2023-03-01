import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;

export const tableContainerStyle = style({
  borderCollapse: "collapse",
});

export const tableThStyle = recipe({
  base: {
    textAlign: "start",
    whiteSpace: "nowrap",
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes.md,
    color: vars.colors.text[900],
    background: vars.colors.line,
  },
  variants: {
    showOrder: {
      true: {
        cursor: "pointer",
        ":hover": { filter: "brightness(0.95)" },
      },
    },
    firstChild: {
      true: { borderRadius: vars.radii.xs + " 0 0 " + vars.radii.xs },
    },
    lastChild: {
      true: { borderRadius: "0 " + vars.radii.xs + vars.radii.xs + " 0" },
    },
  },
});

export const tbodyTrStyle = recipe({
  base: {
    padding: vars.space[4],
    fontWeight: vars.fontWeights.medium,
  },
  variants: {
    isNotLastChield: {
      true: { borderBottom: `1px solid ${vars.colors.line}` },
    },
  },
});
