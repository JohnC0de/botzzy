import { useLoaderData, useOutletContext } from "@remix-run/react";

import welcomeImageLight from "~/client/assets/welcome-light.svg";
import welcomeImageDark from "~/client/assets/welcome-dark.png";

import { Button, Card, Container } from "~/client/components";
import { useCrud } from "~/client/hooks";
import { globalStyles } from "~/client/styles";
import { Icons } from "~/client/icons";
import type { loaderReturnProps } from "../types";

export function EmptyView() {
  const { openFormModal } = useCrud();
  const context = useOutletContext<any>();
  const loaderData = useLoaderData<loaderReturnProps>();
  const { vars } = globalStyles;

  return (
    <Container>
      <Card
        align="center"
        justify="center"
        direction="column"
        spacing={2}
        style={{ height: "100%" }}
      >
        <img
          height={300}
          src={context?.isDarkTheme ? welcomeImageDark : welcomeImageLight}
          alt="Seja bem vindo!"
        />

        <h2 style={{ marginTop: "1rem", color: vars.colors.text[900] }}>
          Pronto! Agora configure um evento para a integração "
          {loaderData.integration.name}"
        </h2>

        <p style={{ maxWidth: "600px", textAlign: "center" }}>
          Clique no botão abaixo, e escolha um "evento" que irá retornar do
          webhook. Exemplo: Compra Aprovada, Boleto Emitido, Carrinho
          Abandonado, etc
        </p>

        <Button
          onClick={() => openFormModal({ title: "Adicionar primeiro evento" })}
          style={{ marginTop: "1rem" }}
          fontSize="lg"
          spacing={2}
        >
          <Icons.ChevronRight size={24} /> Configurar Evento
        </Button>
      </Card>
    </Container>
  );
}
