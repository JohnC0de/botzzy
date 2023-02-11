import { Outlet, useFetcher, useOutletContext } from "@remix-run/react";
import { useState } from "react";

import { Button, Card } from "~/client/components";
import { useRoot } from "~/client/hooks";
import { Icons } from "~/client/icons";

import { SideBar } from "../components/Sidebar";
import { ToggleSidebarButton } from "../components/ToggleSidebarButton";
import { UserPopover } from "../components/UserPopover";
import { viewContainerStyle, headerStyle, contentStyle } from "./styles.css";

type outletContextProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export function View() {
  const { Form } = useFetcher();
  const { sidebar } = useRoot();

  const outletContext = useOutletContext<outletContextProps>();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(sidebar === "true");
  const [drawerBarIsOpen, setDrawerBarIsOpen] = useState(false);

  function toggleSidebar() {
    setSidebarIsOpen((old) => !old);
    setDrawerBarIsOpen((old) => !old);
  }

  return (
    <div className={viewContainerStyle}>
      <header className={headerStyle}>
        <ToggleSidebarButton
          isOpen={sidebarIsOpen}
          toggleSidebar={toggleSidebar}
        />
        <Card align="center" spacing={2} showBgColor>
          <Form
            method="post"
            action="/api/switchtheme"
            style={{ background: "inherit" }}
          >
            <Button
              onClick={outletContext.toggleTheme}
              space={2}
              variant="ghost"
            >
              {outletContext.isDarkTheme && <Icons.Moon size={22} />}
              {!outletContext.isDarkTheme && <Icons.Sun size={22} />}
            </Button>
          </Form>
          <UserPopover />
        </Card>
      </header>

      <div className={contentStyle}>
        <SideBar
          isOpen={sidebarIsOpen}
          drawerIsOpen={drawerBarIsOpen}
          setDrawerIsOpen={setDrawerBarIsOpen}
        />
        <Outlet />
      </div>
    </div>
  );
}
