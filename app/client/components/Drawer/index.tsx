import { AnimatePresence, motion } from "framer-motion";

import { Icons } from "~/client/icons";
import { globalStyles } from "~/client/styles";
import {
  drawerContentStyle,
  drawerCloseButtonStyle,
  drawerOverlayStyle,
  drawerHeaderButtonStyle,
} from "./styles.css";
import type { DrawerProps } from "./types";

export function Drawer({
  isVisible,
  children,
  title,
  position = "left",
  showOverlay = true,
  makeInvisible,
}: DrawerProps) {
  const translateX =
    position === "left" ? "translateX(-100%)" : "translateX(100%)";

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className={drawerContentStyle({
              direction: position,
              showOverlay: showOverlay,
            })}
            transition={{ duration: 0.1, ease: "linear" }}
            initial={{ transform: translateX }}
            animate={{ transform: "translateX(0px)" }}
            exit={{ transform: translateX }}
          >
            <header className={drawerHeaderButtonStyle({ title: !!title })}>
              {title && <h3>{title}</h3>}

              <button
                onClick={makeInvisible}
                className={drawerCloseButtonStyle({ direction: position })}
              >
                <Icons.X
                  size={19.2}
                  color={globalStyles.vars.colors.text[500]}
                />
              </button>
            </header>

            {children}
          </motion.div>

          {showOverlay && (
            <motion.div
              onClick={makeInvisible}
              className={drawerOverlayStyle}
              transition={{ duration: 0.1, ease: "linear" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  );
}
