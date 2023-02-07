import { AnimatePresence, motion } from "framer-motion";

import type { ReactNode } from "react";
import { Icons } from "~/client/icons";
import { globalStyles } from "~/client/styles";
import {
  modalContainerStyle,
  modalContentHeaderButtonStyle,
  modalContentHeaderStyle,
  modalContentStyle,
  modalOverlayStyle,
} from "./styles.css";

type ModalProps = {
  title?: string;
  children?: ReactNode;
  isVisible: boolean;
  makeInvisible: () => void;
};

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
            transition={{ duration: 0.1, ease: "easeIn" }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {title && (
              <header className={modalContentHeaderStyle}>
                <h3>{title}</h3>

                <button
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
