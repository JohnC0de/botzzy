import type { IconType } from "react-icons";

export type StatsProps = {
  title: string;
  content: string;
  icon: IconType;
  iconBg: string;
  badge?: { type: "input" | "output"; content: string };
};
