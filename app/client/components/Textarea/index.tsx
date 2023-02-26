import { useId } from "react";
import {
  inputContainerStyle,
  errorInputStyle,
  inputStyle,
  labelStyle,
} from "./styles.css";

import type { TextAreaTypes } from "./types";
import { motion } from "framer-motion";

export function Textarea({
  radii,
  variant = "default",
  fontSize,
  fontWeight,
  space,
  children,
  label,
  error,
  disabled,
  ...rest
}: TextAreaTypes) {
  const id = useId();
  return (
    <div className={inputContainerStyle}>
      {label && (
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
      )}

      <textarea
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
