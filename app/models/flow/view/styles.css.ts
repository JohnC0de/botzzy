import { style } from "@vanilla-extract/css";

export const viewContainer = style({
  width: "100vw",
  height: "calc(100vh - 4rem)",
  position: "relative",
});

export const buttonAddNodeArea = style({
  position: "absolute",
  zIndex: 2,
  bottom: "1rem",
  left: "1rem",
});
