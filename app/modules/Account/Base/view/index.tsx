import { Outlet, useFetcher, useLoaderData } from "@remix-run/react";
import { Card, Header, Container } from "~/client/components";
import { AccountNavigationMenu } from "../components";

export function View() {
  const { me, accountInfo, cards, payments } = useLoaderData();
  const { Form, state, data } = useFetcher();

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

          <Form method="post">
            <Card direction="column" space={4} spacing={8}>
              <Outlet
                context={{ me, payments, accountInfo, cards, state, data }}
              />
            </Card>
          </Form>
        </Card>
      </Card>
    </Container>
  );
}
