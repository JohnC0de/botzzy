import { containerStyle } from "./styles.css";
import type { ContainerProps } from "./types";

export function Container({ children }: ContainerProps) {
  return <div className={containerStyle}>{children}</div>;
}
