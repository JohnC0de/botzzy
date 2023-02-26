import { Outlet, useFetcher, useOutletContext } from "@remix-run/react";

import { Button, Card } from "~/client/components";
import { Icons } from "~/client/icons";
import { DetachMenu } from "../components/DetachMenu";

import { Menu } from "../components/Menu";
import { UserPopover } from "../components/UserPopover";
import { viewContainerStyle, headerStyle, contentStyle } from "./styles.css";

type outletContextProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export function View() {
  const { Form } = useFetcher();
  const outletContext = useOutletContext<outletContextProps>();

  return (
    <div className={viewContainerStyle}>
      <Menu />
      <DetachMenu />

      <main className={contentStyle}>
        <header className={headerStyle}>
          <Form method="post" action="/api/switchtheme">
            <Card align="center" spacing={2} showBgColor>
              <Button
                onClick={outletContext.toggleTheme}
                space={2}
                variant="ghost"
                radii="full"
              >
                {outletContext.isDarkTheme && <Icons.Moon size={22} />}
                {!outletContext.isDarkTheme && <Icons.Sun size={22} />}
              </Button>
            </Card>
          </Form>
          <UserPopover />
        </header>

        <Outlet />
      </main>
    </div>
  );
}
