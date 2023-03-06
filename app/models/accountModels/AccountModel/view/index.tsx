import { Outlet } from "@remix-run/react";
import { Card, Header, Container } from "~/client/components";
import { AccountNavigationMenu } from "../components";

export function View() {
  return (
    <Container>
      <Header title="Minha conta" />

      <Card showBgColor direction="column" radii="xs" space={4} spacing={4}>
        <AccountNavigationMenu />
        <Outlet />
      </Card>
    </Container>
  );
}
