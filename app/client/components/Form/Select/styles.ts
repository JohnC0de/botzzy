import type { StylesConfig, Theme } from "react-select";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;

const selectStyles: StylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    outline: "1px solid transparent",
    transition: "all 0s",
    height: "2.5rem",
    flex: 1,
    borderRadius: vars.radii.xs,
    opacity: 1,
    outlineColor: !state.isFocused ? "transparent" : vars.colors.indigo[500],
    borderColor: !state.isFocused ? vars.colors.line : vars.colors.indigo[500],
    backgroundColor: vars.colors.bg[100],
    ":hover": {
      outlineColor: !state.isFocused ? "transparent" : vars.colors.indigo[500],
      borderColor: !state.isFocused
        ? vars.colors.line
        : vars.colors.indigo[500],
    },
  }),

  input: (baseStyles) => ({
    ...baseStyles,
    color: vars.colors.text[100],
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    "::placeholder": { color: vars.colors.text[100] },
  }),

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: vars.colors.text[100],
    opacity: 0.6,
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
  }),

  option: (baseStyles) => ({
    ...baseStyles,
    color: vars.colors.text[100],
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
    ":hover": { cursor: "pointer" },
  }),

  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: vars.colors.text[100],
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: vars.colors.bg[100],
    margin: 0,
    zIndex: 9999,
    border: "1px solid " + vars.colors.line,
    borderRadius: vars.radii.xs,
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: vars.colors.text[100],
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
  }),

  noOptionsMessage: (baseStyles) => ({
    ...baseStyles,
    color: vars.colors.text[100],
    fontWeight: vars.fontWeights.medium,
  }),
};

export function reactStyles(error?: string) {
  if (!error) return selectStyles;
  else
    return {
      ...selectStyles,
      control: (baseStyles, state) => ({
        ...baseStyles,
        outline: "1px solid transparent",
        transition: "all 0s",
        height: "3rem",
        flex: 1,
        borderRadius: vars.radii.xs,
        opacity: 1,
        outlineColor: !state.isFocused
          ? vars.colors.red[500]
          : vars.colors.indigo[500],
        borderColor: !state.isFocused
          ? vars.colors.red[500]
          : vars.colors.indigo[500],
        backgroundColor: vars.colors.bg[100],
        ":hover": {
          outlineColor: !state.isFocused
            ? vars.colors.red[500]
            : vars.colors.indigo[500],
          borderColor: !state.isFocused
            ? vars.colors.red[500]
            : vars.colors.indigo[500],
        },
      }),
    } as StylesConfig;
}

export const selectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: vars.colors.slate[200],
    primary25: vars.colors.slate[200],
    primary50: vars.colors.slate[200],
  },
});
