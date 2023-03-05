import { style } from "@vanilla-extract/css";
import { globalStyles } from "~/client/styles";

const { vars } = globalStyles;
export const referralCardContainerStyle = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: vars.space[6],
});
