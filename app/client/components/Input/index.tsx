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
import { motion } from "framer-motion";

export function Input({
  radii,
  variant,
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

  function handleInput() {
    switch (type) {
      case "mask":
        return (
          <InputMask
            mask={mask || "Need to add a mask"}
            id={id}
            className={inputStyle({
              fontSize,
              fontWeight,
              radii,
              space,
              variant,
              isError: !!error,
            })}
            {...rest}
          />
        );
      case "currency":
        return (
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
              isError: !!error,
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
        );
      default:
        return (
          <input
            id={id}
            className={inputStyle({
              fontSize,
              fontWeight,
              radii,
              space,
              variant,
              isError: !!error,
            })}
            type={type}
            {...rest}
          />
        );
    }
  }

  return (
    <div className={inputContainerStyle}>
      {label && (
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
      )}

      {handleInput()}

      {error && (
        <motion.p
          transition={{ duration: 0.1, ease: "easeIn" }}
          initial={{ opacity: 0, transform: "translateY(-5px)", height: "0px" }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            height: "unset",
          }}
          exit={{ opacity: 0, transform: "translateY(-5px)", height: "0px" }}
          className={errorInputStyle}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
