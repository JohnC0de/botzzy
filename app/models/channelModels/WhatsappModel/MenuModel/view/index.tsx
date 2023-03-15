import { Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { Card, Header, Container, Button } from "~/client/components";
import { Icons } from "~/client/icons";
import { AccountNavigationMenu } from "../components";
import type { OutletContextProps } from "../types";

export function View() {
  const { channel } = useLoaderData<OutletContextProps>();
  const navigate = useNavigate();

  return (
    <Container>
      <Header
        title={`Editar Canal - ${channel.internal_name}`}
        subTitle="Home > Canais > Editar > Whatsapp"
        content={
          <Button
            onClick={() => navigate("/v1/protect/channels")}
            variant="outline"
            space={2}
          >
            <Icons.ChevronLeft size={18} />
            Voltar
          </Button>
        }
      />

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
          <Outlet context={{ channel }} />
        </Card>
      </Card>
    </Container>
  );
}
