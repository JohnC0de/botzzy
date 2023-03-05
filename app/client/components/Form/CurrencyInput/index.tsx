import { useId, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import type { CurrencyInputProps } from "./types";

import { onKeyDown, valueDisplay } from "./currencyFormater";
import {
  inputContainerStyle,
  errorInputStyle,
  inputStyle,
  labelStyle,
} from "../inputStyles.css";

export function CurrencyInput({
  label,
  fontSize,
  fontWeight,
  radii,
  error,
  space,
  variant,
  ...rest
}: CurrencyInputProps) {
  const id = useId();
  const [inputCurrencyValue, setInputCurrencyValue] = useState(0);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    onKeyDown(event, inputCurrencyValue, setInputCurrencyValue, 100000000);
  }

  return (
    <div className={inputContainerStyle}>
      {label && (
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
      )}

      <input
        id={id}
        type="text"
        placeholder="R$ 0,00"
        readOnly
        value={inputCurrencyValue !== 0 ? valueDisplay(inputCurrencyValue) : ""}
        onKeyDown={handleKeyDown}
        className={inputStyle({
          fontSize,
          fontWeight,
          radii,
          isError: !!error,
          space,
          variant,
        })}
        {...rest}
      />

      {error && (
        <motion.p
          transition={{ duration: 0.1, ease: "easeIn" }}
          initial={{ opacity: 0, transform: "translateY(-5px)", height: "0px" }}
          animate={{ opacity: 1, transform: "translateY(0)", height: "unset" }}
          exit={{ opacity: 0, transform: "translateY(-5px)", height: "0px" }}
          className={errorInputStyle}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
