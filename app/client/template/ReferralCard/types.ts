import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type ReferralCardProps = {
  children: ReactNode;
  icon: IconType;
  iconBackgrundColor: string;

  badgeVariant?: "success" | "warning" | "danger" | "info" | "primary";
  badgeContent?: ReactNode;
};
