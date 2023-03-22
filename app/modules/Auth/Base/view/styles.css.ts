import { style } from "@vanilla-extract/css";

import { globalStyles } from "~/client/styles";
import authSideBg from "~/client/assets/auth_side_bg.jpg";

const { vars } = globalStyles;

export const authContainerStyle = style({
  display: "flex",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
});

export const authHeroStyle = style({
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

export const authContentStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  flex: 2,
});
