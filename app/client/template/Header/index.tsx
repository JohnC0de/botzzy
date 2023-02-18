import { headerStyle, titleStyle, contentStyle } from "./styles.css";
import type { HeaderProps } from "./types";

export function Header({ title, content }: HeaderProps) {
  return (
    <header className={headerStyle}>
      <h1 className={titleStyle}>{title}</h1>
      <div className={contentStyle}>{content}</div>
    </header>
  );
}
