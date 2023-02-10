import { useId, useState } from "react";
import InputMask from "react-input-mask";
import {
  inputContainerStyle,
  errorInputStyle,
  inputStyle,
  labelStyle,
} from "./styles.css";

import type { InputTypes } from "./types";
import { handleKeyDown, valueDisplay } from "./currencyFormater";

export function Input({
  radii,
  variant = "default",
  fontSize,
  fontWeight,
  space,
  mask,
  children,
  label,
  error,
  disabled,
  type = "text",
  ...rest
}: InputTypes) {
  const id = useId();
  const [inputCurrencyValue, setInputCurrencyValue] = useState(0);

  return (
    <div className={inputContainerStyle}>
      {label && (
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
      )}

      {type === "text" && (
        <input
          id={id}
          className={inputStyle({
            fontSize,
            fontWeight,
            radii,
            space,
            variant,
          })}
          {...rest}
        />
      )}

      {type === "currency" && (
        <input
          id={id}
          placeholder="R$ 0,00"
          value={
            inputCurrencyValue !== 0 ? valueDisplay(inputCurrencyValue) : ""
          }
          readOnly
          className={inputStyle({
            fontSize,
            fontWeight,
            radii,
            space,
            variant,
          })}
          onKeyDown={(e) =>
            handleKeyDown(
              e,
              inputCurrencyValue,
              setInputCurrencyValue,
              100000000
            )
          }
          {...rest}
        />
      )}

      {type === "mask" && (
        <InputMask
          mask={mask || "Need to add a mask"}
          id={id}
          className={inputStyle({
            fontSize,
            fontWeight,
            radii,
            space,
            variant,
          })}
          {...rest}
        />
      )}

      {error && <p className={errorInputStyle}>{error}</p>}
    </div>
  );
}
