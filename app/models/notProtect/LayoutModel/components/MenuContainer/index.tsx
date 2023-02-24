import type { ReactNode } from "react";

import { Drawer } from "~/client/components";
import { useLayout } from "~/client/hooks";

import {
  drawerContentStyle,
  greaterThanThousand,
  lessThanThousand,
} from "./styles.css";

type MenuContainerProps = { children: ReactNode };

export function MenuContainer({ children }: MenuContainerProps) {
  const { drawerIsCollapse, handleCloseDrawer } = useLayout();

  return (
    <div>
      <nav className={greaterThanThousand}>{children}</nav>
      <div className={lessThanThousand}>
        <Drawer isVisible={drawerIsCollapse} makeInvisible={handleCloseDrawer}>
          <div className={drawerContentStyle}>{children}</div>
        </Drawer>
      </div>
    </div>
  );
}
