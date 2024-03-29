import { AnimatePresence, motion } from "framer-motion";

import { Icons } from "~/client/icons";
import { globalStyles } from "~/client/styles";
import {
  modalContainerStyle,
  modalContentHeaderButtonStyle,
  modalContentHeaderStyle,
  modalContentStyle,
  modalOverlayStyle,
} from "./styles.css";

import type { ModalProps } from "./types";

export function Modal({
  isVisible,
  title,
  makeInvisible,
  children,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className={modalContainerStyle}>
          <motion.div
            className={modalContentStyle}
            transition={{ duration: 0.1, ease: "easeOut" }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {title && (
              <header className={modalContentHeaderStyle}>
                <h3
                  style={{
                    color: globalStyles.vars.colors.text[900],
                    fontWeight: globalStyles.vars.fontWeights.bold,
                  }}
                >
                  {title}
                </h3>

                <button
                  type="button"
                  onClick={makeInvisible}
                  className={modalContentHeaderButtonStyle}
                >
                  <Icons.X
                    size={19.2}
                    color={globalStyles.vars.colors.text[500]}
                  />
                </button>
              </header>
            )}
            {children}
          </motion.div>

          <motion.div
            className={modalOverlayStyle}
            onClick={makeInvisible}
            transition={{ duration: 0.1, ease: "easeIn" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
