import { Outlet, useLoaderData, useNavigation } from "@remix-run/react";
import { Card, Header, Container, Spinner } from "~/client/components";
import { AccountNavigationMenu } from "../components";

export function View() {
  const navigation = useNavigation();
  const { me } = useLoaderData();
  const loading = navigation.state === "loading" && !navigation.formMethod;

  return (
    <Container>
      <Header title="Minha conta" />

      <Card showBgColor direction="column" radii="xs" space={4} spacing={4}>
        <AccountNavigationMenu />
        {!loading && <Outlet context={{ me }} />}
      </Card>

      {loading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Spinner size="xl" />
        </div>
      )}
    </Container>
  );
}
