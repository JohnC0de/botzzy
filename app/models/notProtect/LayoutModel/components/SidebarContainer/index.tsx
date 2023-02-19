import { Drawer } from "~/client/components";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  drawerContentStyle,
  greaterThanThousand,
  lessThanThousand,
} from "./styles.css";
import { useLocation } from "@remix-run/react";

type SidebarContainerProps = {
  isOpen: boolean;
  drawerIsOpen: boolean;
  setDrawerIsOpen: (e: boolean) => void;
  children: ReactNode;
};

export function SidebarContainer({
  children,
  drawerIsOpen,
  setDrawerIsOpen,
  isOpen,
}: SidebarContainerProps) {
  const { pathname } = useLocation();
  const includeFlow = pathname.includes("flow");

  return (
    <div>
      {!includeFlow && (
        <motion.nav
          initial={{ width: isOpen ? "16rem" : "5rem" }}
          animate={{ width: isOpen ? "16rem" : "5rem" }}
          className={greaterThanThousand}
        >
          {children}
        </motion.nav>
      )}

      {!includeFlow && (
        <div className={lessThanThousand}>
          <Drawer
            isVisible={drawerIsOpen}
            makeInvisible={() => setDrawerIsOpen(false)}
          >
            <div className={drawerContentStyle}>{children}</div>
          </Drawer>
        </div>
      )}

      {includeFlow && (
        <Drawer
          isVisible={drawerIsOpen}
          makeInvisible={() => setDrawerIsOpen(false)}
        >
          <div className={drawerContentStyle}>{children}</div>
        </Drawer>
      )}
    </div>
  );
}
