import { Spinner } from "~/client/components";
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
  type = "button",
  variant = "default",
  fontSize,
  spacing,
  fontWeight,
  space,
  children,
  disabled,
  justify,
  hoverVariant,
  ...rest
}: ButtonTypes) {
  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      className={buttonStyle({
        variant,
        fontSize,
        fontWeight,
        radii,
        hoverVariant,
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
        className={childrenStyle({ spacing, justify })}
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        {children}
      </span>
    </button>
  );
}
