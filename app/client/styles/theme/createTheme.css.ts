import { darkThemeColors } from "./darkThemeColors";
import { lightThemeColors } from "./lightThemeColors";
import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const colors = createThemeContract({
	indigo: {
		50: null,
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

	emerald: {
		50: null,
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

	red: {
		50: null,
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

	yellow: {
		50: null,
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

	cyan: {
		50: null,
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

	slate: {
		50: null,
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
