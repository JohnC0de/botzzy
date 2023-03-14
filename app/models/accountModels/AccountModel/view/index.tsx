import { Outlet, useLoaderData } from "@remix-run/react";
import { Card, Header, Container } from "~/client/components";
import { AccountNavigationMenu } from "../components";

export function View() {
  const { me } = useLoaderData();
  return (
    <Container>
      <Header title="Minha conta" />

      <Card showBgColor direction="column" radii="xs" space={4} spacing={4}>
        <AccountNavigationMenu />
        <Outlet context={{ me }} />
      </Card>
    </Container>
  );
}
