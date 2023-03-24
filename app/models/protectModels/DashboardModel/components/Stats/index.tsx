import { Badge } from "~/client/components";
import { Icons } from "~/client/icons";

import {
  contentContainerStyle,
  statsContainerStyle,
  titleStyle,
} from "./styles.css";
import type { StatsProps } from "./types";

export function Stats({ content, subTitle, title, badge }: StatsProps) {
  const isInput = badge?.type === "input";

  return (
    <div className={statsContainerStyle}>
      <div className={contentContainerStyle}>
        <div className={titleStyle}>{title}</div>
        <h2>{content}</h2>
        <small>{subTitle}</small>
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
