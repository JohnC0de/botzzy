import { useLoaderData } from "@remix-run/react";
import { Button, Card, Container, Header, Stats } from "~/client/components";
import { useCrud } from "~/client/hooks";
import { Icons } from "~/client/icons";
import { globalStyles } from "~/client/styles";
import { ModalDelete, ChannelsTable, ModalCreate } from "../components";
import type { loaderReturnProps } from "../types";

const { vars } = globalStyles;
export function View() {
  const { openFormModal } = useCrud();
  const { channels } = useLoaderData<loaderReturnProps>();

  return (
    <Container>
      <Header
        title="Canais"
        subTitle="Home > Canais"
        content={
          <Button
            space={2}
            onClick={() => openFormModal({ title: "Criar canal" })}
          >
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
          content={channels.length.toString()}
        />
        <Stats
          title="Canais Ativos"
          icon={Icons.Check}
          iconBg={vars.colors.emerald[500]}
          content={channels
            .filter((channels) => channels.state === "Ativo")
            .length.toString()}
        />
        <Stats
          title="Canais desativos"
          icon={Icons.X}
          iconBg={vars.colors.red[500]}
          content={channels
            .filter((channels) => channels.state === "Pausado")
            .length.toString()}
        />
      </Card>

      <ChannelsTable />
      <ModalCreate />
      <ModalDelete />
    </Container>
  );
}
