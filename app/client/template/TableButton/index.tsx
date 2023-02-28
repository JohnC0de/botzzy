import { tableButtonContainerStyle } from "./styles.css";
import type { TableButtonProps } from "./types";

export function TableButton({ variant, ...rest }: TableButtonProps) {
  return (
    <button className={tableButtonContainerStyle({ variant })} {...rest} />
  );
}
