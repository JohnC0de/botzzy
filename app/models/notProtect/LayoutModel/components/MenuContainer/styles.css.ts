import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const greaterThanThousand = style({
  display: "none",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  width: "5rem",
  height: "100vh",
  background: vars.colors.indigo[500],
  gap: vars.space[1],

  "@media": { "(min-width: 1000px)": { display: "flex" } },
});

export const lessThanThousand = style({
  display: "none",
  "@media": { "(max-width: 1000px)": { display: "unset" } },
});

export const drawerContentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  padding: vars.space[2],
});
