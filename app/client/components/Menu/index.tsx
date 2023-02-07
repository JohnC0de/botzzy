import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import {
  menuContainerStyle,
  optionContainerStyle,
  optionStyle,
  menuOverlayStyle,
} from "./styles.css";
import type { MenuProps } from "./types";

export function Menu({ children, options }: MenuProps) {
  const menuId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={menuContainerStyle}>
      <span onClick={() => setIsOpen(true)}>{children}</span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{ duration: 0.1, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={optionContainerStyle}
          >
            {options.map((option, index) => (
              <span
                key={`menu_${menuId}_${index}`}
                onClick={() => setIsOpen(false)}
                className={optionStyle}
              >
                {option}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <span onClick={() => setIsOpen(false)} className={menuOverlayStyle} />
      )}
    </div>
  );
}
