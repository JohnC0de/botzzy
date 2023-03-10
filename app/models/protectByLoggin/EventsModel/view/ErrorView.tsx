import { Button, Card, Container } from "~/client/components";
import errorImageLight from "~/client/assets/bug-light.svg";
import welcomeImageDark from "~/client/assets/welcome-dark.png";
import { globalStyles } from "~/client/styles";
import { useOutletContext } from "@remix-run/react";

const { vars } = globalStyles;
export function ErrorView() {
  const context = useOutletContext<any>();

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
          <Button fontSize="lg">Entre em contato conosco</Button>
        </a>
      </Card>
    </Container>
  );
}
