import {
  headerStyle,
  titleStyle,
  subTitleStyle,
  contentStyle,
} from "./styles.css";
import type { HeaderProps } from "./types";

export function Header({
  title,
  subTitle,
  content,
  titleFontSize,
}: HeaderProps) {
  return (
    <header className={headerStyle}>
      <div>
        <h1 className={titleStyle({ fontSize: titleFontSize })}>{title}</h1>
        {subTitle && <h4 className={subTitleStyle}>{subTitle}</h4>}
      </div>
      <div className={contentStyle}>{content}</div>
    </header>
  );
}
