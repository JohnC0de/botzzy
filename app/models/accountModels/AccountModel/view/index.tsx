import { Outlet, useLoaderData } from "@remix-run/react";
import { Card, Header, Container } from "~/client/components";
import { AccountNavigationMenu } from "../components";

export function View() {
  const { me, accountInfo, cards } = useLoaderData();
  return (
    <Container>
      <Header title="Minha conta" />

      <Card direction="column" align="center">
        <Card
          showBgColor
          direction="column"
          radii="xs"
          space={4}
          spacing={4}
          style={{ width: "100%", maxWidth: 1280 }}
        >
          <AccountNavigationMenu />
          <Outlet context={{ me, accountInfo, cards }} />
        </Card>
      </Card>
    </Container>
  );
}
