import { Badge } from "~/client/components";
import { Icons } from "~/client/icons";

import {
  contentContainerStyle,
  iconContainerStyle,
  statsContainerStyle,
} from "./styles.css";
import type { StatsProps } from "./types";

export function Stats({
  content,
  icon: Icon,
  iconBg: background,
  title,
  badge,
}: StatsProps) {
  const isInput = badge?.type === "input";

  return (
    <div className={statsContainerStyle}>
      <div className={iconContainerStyle} style={{ background }}>
        <Icon />
      </div>
      <div className={contentContainerStyle}>
        <small>{title}</small>
        <h4>{content}</h4>
      </div>
      {badge && (
        <Badge variant={isInput ? "success" : "danger"}>
          {isInput ? <Icons.ChevronTop /> : <Icons.ChevronBottom />}
          {badge.content}
        </Badge>
      )}
    </div>
  );
}
