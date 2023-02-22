import { style } from "@vanilla-extract/css";

export const viewContainer = style({
  width: "100vw",
  height: "calc(100vh - 4rem)",
  position: "relative",
});

export const buttonSaveNodeArea = style({
  position: "absolute",
  zIndex: 2,
  top: "0.5rem",
  right: "0.5rem",
});

export const buttonAddNodeArea = style({
  position: "absolute",
  zIndex: 2,
  bottom: "0.5rem",
  left: "0.5rem",
});
