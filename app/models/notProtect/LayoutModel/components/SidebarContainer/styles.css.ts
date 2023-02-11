import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";
const { vars } = globalStyles;

export const greaterThanThousand = style({
  display: "none",
  flexDirection: "column",
  overflow: "hidden",
  height: "calc(100vh - 4rem)",
  background: vars.colors.bg[100],
  padding: vars.space[3],
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
