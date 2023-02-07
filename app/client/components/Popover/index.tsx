import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  contentContainerStyle,
  popoverContainerStyle,
  popoverOverlayStyle,
} from "./styles.css";
import type { PopoverProps } from "./types";

export function Popover({ children, button }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={popoverContainerStyle}>
      <span onClick={() => setIsOpen(true)}>{button}</span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{ duration: 0.1, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={contentContainerStyle}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <span
          onClick={() => setIsOpen(false)}
          className={popoverOverlayStyle}
        />
      )}
    </div>
  );
}
