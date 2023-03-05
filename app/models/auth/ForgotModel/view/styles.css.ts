import { keyframes, style } from "@vanilla-extract/css";
import authSideBg from "~/client/assets/auth_side_bg.jpg";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;

export const viewContainerStyle = style({
  display: "flex",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
});

export const heroContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: vars.space[6] + vars.space[12],

  flex: 1,
  backgroundImage: `url(${authSideBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  "@media": { "(max-width: 1000px)": { display: "none" } },
});

export const formContainerStyle = style({
  flex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

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
  padding: vars.space[4],
  gap: vars.space[3],
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
