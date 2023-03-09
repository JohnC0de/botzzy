import type { StylesConfig, Theme } from "react-select";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;

const selectStyles: StylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    outline: "1px solid transparent",
    transition: "all 0s",
    height: "3rem",
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
    color: vars.colors.text[500],
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
    color: vars.colors.text[500],
    fontSize: vars.fontSizes.sm,
    fontWeight: vars.fontWeights.medium,
  }),

  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: vars.colors.text[500],
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: vars.colors.bg[100],
    margin: 0,
    border: "1px solid " + vars.colors.line,
    borderRadius: vars.radii.xs,
    boxShadow: "none",
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: vars.colors.text[500],
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
    primary: vars.colors.line,
    primary25: vars.colors.line,
    primary50: vars.colors.line,
  },
});
