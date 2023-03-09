import { motion } from "framer-motion";
import { useId } from "react";
import ReactSelect from "react-select";
import {
  errorInputStyle,
  inputContainerStyle,
  labelStyle,
} from "../inputStyles.css";
import { reactStyles, selectTheme } from "./styles";
import type { SelectProps } from "./types";

export function Select({
  noOptionsMessage = () => "Sem opções",
  isSearchable = true,
  label,
  error,
  ...rest
}: SelectProps) {
  const id = useId();
  return (
    <div className={inputContainerStyle}>
      {label && (
        <label htmlFor={id} className={labelStyle}>
          {label}
        </label>
      )}

      <ReactSelect
        noOptionsMessage={noOptionsMessage}
        isSearchable={isSearchable}
        theme={selectTheme}
        styles={reactStyles(error)}
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
