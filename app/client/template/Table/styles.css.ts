import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const tableContainerStyle = style({
  borderCollapse: "collapse",
});

export const tableTheadStyle = style({});

export const tableThStyle = recipe({
  base: {
    textAlign: "start",
    whiteSpace: "nowrap",
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
    fontSize: vars.fontSizes.sm,
  },
  variants: {
    isNotLastChield: {
      true: { borderBottom: `1px solid ${vars.colors.line}` },
    },
  },
});

export const badgeStyle = recipe({
  variants: {
    variant: {
      danger: {
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        fontWeight: vars.fontWeights.medium,
        color: vars.colors.danger[400],
        ":before": {
          content: "",
          padding: "0.3rem",
          borderRadius: vars.radii.full,
          backgroundColor: vars.colors.danger[400],
        },
      },
      warning: {
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        fontWeight: vars.fontWeights.medium,
        color: vars.colors.warning[400],
        ":before": {
          content: "",
          padding: "0.3rem",
          borderRadius: vars.radii.full,
          backgroundColor: vars.colors.warning[400],
        },
      },
      info: {
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        fontWeight: vars.fontWeights.medium,
        color: vars.colors.info[400],
        ":before": {
          content: "",
          padding: "0.3rem",
          borderRadius: vars.radii.full,
          backgroundColor: vars.colors.info[400],
        },
      },
      success: {
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        fontWeight: vars.fontWeights.medium,
        color: vars.colors.success[400],
        ":before": {
          content: "",
          padding: "0.3rem",
          borderRadius: vars.radii.full,
          backgroundColor: vars.colors.success[400],
        },
      },
    },
  },
});
