import { darkThemeColors } from "./darkThemeColors";
import { lightThemeColors } from "./lightThemeColors";
import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const colors = createThemeContract({
  primary: {
    100: null,
    300: null,
    500: null,
    700: null,
  },

  success: {
    100: null,
    300: null,
    400: null,
    500: null,
  },

  danger: {
    100: null,
    300: null,
    400: null,
    500: null,
  },

  warning: {
    100: null,
    300: null,
    400: null,
    500: null,
  },

  info: {
    100: null,
    300: null,
    400: null,
    500: null,
  },

  gray: {
    100: null,
    200: null,
    300: null,
    400: null,
    500: null,
    600: null,
    700: null,
    800: null,
    900: null,
  },

  text: {
    100: null,
    500: null,
    900: null,
  },

  bg: {
    100: null,
    500: null,
  },

  line: null,
});

export const lightTheme = createTheme(colors, lightThemeColors);
export const darkTheme = createTheme(colors, darkThemeColors);
