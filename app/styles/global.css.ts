import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { colors, darkTheme, lightTheme } from "./theme/createTheme.css";
import * as tokens from "./tokens";

export const root = createGlobalTheme("html", tokens);
export const vars = { ...root, colors };

globalStyle("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
  fontFamily: vars.fonts.default,
});

globalStyle("li", {
  listStyle: "none",
});

globalStyle("#body", {
  backgroundColor: "red",
  height: "100vh",
  width: "100vw",
});

export const globalStyles = { vars, darkTheme, lightTheme };
