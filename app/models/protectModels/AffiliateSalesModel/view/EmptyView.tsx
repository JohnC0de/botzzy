import { useOutletContext } from "@remix-run/react";

import welcomeImageLight from "~/client/assets/welcome-light.svg";
import welcomeImageDark from "~/client/assets/welcome-dark.png";

import { Button, Card, Container } from "~/client/components";
import { useCrud } from "~/client/hooks";
import { globalStyles } from "~/client/styles";
import { Icons } from "~/client/icons";

export function EmptyView() {
  const { openFormModal } = useCrud();
  const context = useOutletContext<any>();
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
          Você ainda não possui vendas!
        </h2>

        <p style={{ maxWidth: "600px", textAlign: "center" }}>
          Comece a divulgar a nossa plataforma utilizando seu link como
          afiliado!
        </p>

        <Button
          onClick={() => openFormModal({ title: "Adicionar primeiro evento" })}
          style={{ marginTop: "1rem" }}
          fontSize="lg"
          spacing={2}
        >
          <Icons.Copy size={24} /> Copiar link de afiliado
        </Button>
      </Card>
    </Container>
  );
}
