import { smallStyle } from "./styles.css";
import type { ReactNode } from "react";

type SmallTitleProps = { children: ReactNode };
export function SmallTitle({ children }: SmallTitleProps) {
  return <small className={smallStyle}>{children}</small>;
}
