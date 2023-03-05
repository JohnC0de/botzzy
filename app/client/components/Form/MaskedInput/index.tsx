import InputMask from "react-input-mask";
import { useId } from "react";
import { motion } from "framer-motion";

import {
  inputContainerStyle,
  errorInputStyle,
  inputStyle,
  labelStyle,
} from "../inputStyles.css";
import type { MaskedInputTypes } from "./types";

export function MaskedInput({
  label,
  fontSize,
  fontWeight,
  radii,
  error,
  space,
  variant,
  ...rest
}: MaskedInputTypes) {
  const id = useId();

  return (
    <div className={inputContainerStyle}>
      {label && (
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
      )}

      <InputMask
        id={id}
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
