import { badgeStyle } from "./styles.css";
import type { BadgeProps } from "./types";

export function Badge({ children, ...rest }: BadgeProps) {
  return <aside className={badgeStyle(rest)}>{children}</aside>;
}
