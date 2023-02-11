import { Drawer } from "~/client/components";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  drawerContentStyle,
  greaterThanThousand,
  lessThanThousand,
} from "./styles.css";

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
  return (
    <div>
      <motion.nav
        initial={{ width: isOpen ? "16rem" : "5rem" }}
        animate={{ width: isOpen ? "16rem" : "5rem" }}
        className={greaterThanThousand}
      >
        {children}
      </motion.nav>

      <div className={lessThanThousand}>
        <Drawer
          title="Menu"
          isVisible={drawerIsOpen}
          makeInvisible={() => setDrawerIsOpen(false)}
        >
          <div className={drawerContentStyle}>{children}</div>
        </Drawer>
      </div>
    </div>
  );
}
