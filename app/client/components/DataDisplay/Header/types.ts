import type { ReactNode } from "react";

export type HeaderProps = {
  title: string;
  subTitle?: string;
  content?: ReactNode;
  titleFontSize?: "xs" | "sm" | "md" | "lg" | "xxs" | "xl" | "2xl";
};
