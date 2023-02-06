import { motion } from "framer-motion";

import { spinnerStyle } from "./styles.css";
import type { SpinnerProps } from "./types";

export function Spinner({ size }: SpinnerProps) {
  return (
    <motion.span
      animate={{ rotate: "360deg" }}
      transition={{ ease: "easeInOut", repeat: Infinity, duration: 1 }}
      className={spinnerStyle({ size })}
    />
  );
}
