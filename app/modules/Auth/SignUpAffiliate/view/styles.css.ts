import { keyframes, style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;

const animateEnterForm = keyframes({
  from: { opacity: 0, transform: "translateX(100px)" },
  to: { opacity: 1, transform: "translateX(0px)" },
});

export const formStyle = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "30rem",
  width: "100%",
  padding: vars.space[4],
  gap: vars.space[2],
  animation: `${animateEnterForm} 0.7s`,
});

export const headingStyle = style({
  color: vars.colors.text[900],
  fontSize: vars.fontSizes["2xl"],
});

export const textStyle = style({
  marginBottom: vars.space[8],
  fontWeight: vars.fontWeights.regular,
});

export const textLinkStyle = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
});

export const linkStyle = style({
  color: vars.colors.indigo[500],
  fontWeight: vars.fontWeights.regular,

  textDecoration: "none",
  ":hover": { textDecoration: "underline" },
});
