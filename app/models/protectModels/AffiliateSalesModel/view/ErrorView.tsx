import { useOutletContext } from "@remix-run/react";

import errorImageLight from "~/client/assets/bug-light.svg";
import welcomeImageDark from "~/client/assets/welcome-dark.png";

import { Button, Card, Container } from "~/client/components";
import { globalStyles } from "~/client/styles";

export function ErrorView() {
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
          style={{ paddingLeft: "2rem" }}
          src={context.isDarkTheme ? welcomeImageDark : errorImageLight}
          alt="Algo deu errado :("
        />

        <h2 style={{ marginTop: "2rem", color: vars.colors.text[900] }}>
          Parece que aconteceu algum erro...
        </h2>

        <a
          href="mailto:lucasedugoncalves123@gmail.com"
          style={{ textDecoration: "none", marginTop: "1rem" }}
        >
          <Button fontSize="lg">Entrar em contato</Button>
        </a>
      </Card>
    </Container>
  );
}
