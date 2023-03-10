import {
  Outlet,
  useFetcher,
  useNavigation,
  useOutletContext,
} from "@remix-run/react";

import { Button, Card, Container, Spinner } from "~/client/components";
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
  const navigation = useNavigation();
  const loading = navigation.state === "loading" && !navigation.formMethod;

  return (
    <div className={viewContainerStyle}>
      <Menu />
      <DetachMenu />

      <div className={contentStyle}>
        <header className={headerStyle}>
          <Form method="post" action="/api/switchtheme">
            <Card align="center" spacing={2} showBgColor>
              <Button
                onClick={outletContext.toggleTheme}
                space={2}
                variant="ghost"
              >
                {outletContext.isDarkTheme && <Icons.Moon size={22} />}
                {!outletContext.isDarkTheme && <Icons.Sun size={22} />}
              </Button>
            </Card>
          </Form>
          <UserPopover />
        </header>

        {loading ? (
          <Container>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Spinner size="2xl" />
            </div>
          </Container>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
