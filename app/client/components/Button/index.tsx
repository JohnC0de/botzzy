import { Spinner } from "../Spinner";
import {
  buttonStyle,
  childrenStyle,
  loadingContainerStyle,
} from "./styles.css";
import type { ButtonTypes } from "./types";

export function Button({
  isDanger,
  isLoading,
  radii,
  variant = "default",
  fontSize,
  spacing,
  fontWeight,
  space,
  children,
  disabled,
  ...rest
}: ButtonTypes) {
  return (
    <button
      disabled={isLoading || disabled}
      className={buttonStyle({
        variant,
        fontSize,
        fontWeight,
        radii,
        space,
      })}
      {...rest}
    >
      {isLoading && (
        <span className={loadingContainerStyle}>
          <Spinner colorful={variant === "default" ? "colored" : "unColored"} />
        </span>
      )}

      <span
        className={childrenStyle({ spacing })}
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        {children}
      </span>
    </button>
  );
}
