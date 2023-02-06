import { buttonStyle } from "./styles.css";
import type { ButtonTypes } from "./types";

export function Button({
  isDanger,
  isLoading,
  radii,
  variant,
  fontSize,
  fontWeight,
  space,
  children,
  ...rest
}: ButtonTypes) {
  return (
    <button
      className={buttonStyle({ variant, fontSize, fontWeight, radii, space })}
      {...rest}
    >
      {children}
    </button>
  );
}
