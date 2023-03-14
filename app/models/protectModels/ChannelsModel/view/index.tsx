import { Button, Card, Container, Header, Stats } from "~/client/components";
import { Icons } from "~/client/icons";
import { globalStyles } from "~/client/styles";
import { ModalDelete, ChannelsTable } from "../components";

const { vars } = globalStyles;
export function View() {
  return (
    <Container>
      <Header
        title="Canais"
        subTitle="Home > Canais"
        content={
          <Button space={2}>
            <Icons.Plus size={22} />
            Novo Canal
          </Button>
        }
      />

      <Card wrap="wrap" spacing={6}>
        <Stats
          title="Total de canais"
          icon={Icons.Server}
          iconBg={vars.colors.cyan[500]}
          content="15"
        />
        <Stats
          title="Canais Ativos"
          icon={Icons.Check}
          iconBg={vars.colors.emerald[500]}
          content="15"
          badge={{ type: "input", content: "15.5%" }}
        />
        <Stats
          title="Canais desativos"
          icon={Icons.X}
          iconBg={vars.colors.red[500]}
          content="15"
          badge={{ type: "output", content: "15.5%" }}
        />
      </Card>

      <ChannelsTable />
      <ModalDelete />
    </Container>
  );
}
