import { Spinner } from "../Spinner";
import { buttonStyle, loadingStyle } from "./styles.css";
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
        <div className={loadingStyle}>
          <Spinner />
        </div>
      )}
      <span style={{ opacity: isLoading ? 0 : 1, transition: "all 0.2s" }}>
        {children}
      </span>
    </button>
  );
}