import { Link, useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { Button, Input } from "~/client/components";
import { useToast } from "~/client/hooks";
import {
  viewContainerStyle,
  heroContainerStyle,
  formContainerStyle,
  formStyle,
  headingStyle,
  textStyle,
  linkStyle,
  textLinkStyle,
} from "./styles.css";

export function View() {
  const { fireToast } = useToast();
  const { Form, data, type } = useFetcher();

  useEffect(() => {
    if (data?.toast) fireToast(data.toast);
  }, [data]);

  return (
    <main className={viewContainerStyle}>
      <section className={heroContainerStyle}>
        <h1 style={{ color: "#FFF", fontSize: "2rem" }}>Botzzy</h1>
        <footer style={{ color: "#FFF" }}>
          Copyright © 2023 <strong>Botzzy</strong>
        </footer>
      </section>
      <section className={formContainerStyle}>
        <Form method="post" className={formStyle}>
          <h2 className={headingStyle}>Bem vindo!</h2>
          <p className={textStyle}>
            Preencha os campos abaixo com suas credenciais para acessar nossa
            plataforma.
          </p>

          <Input
            label="E-mail:"
            name="email"
            variant="outline"
            placeholder="Escreva aqui..."
            error={data?.error?.email}
          />

          <Input
            label="Senha:"
            name="password"
            type="password"
            variant="outline"
            placeholder="Escreva aqui..."
            error={data?.error?.password}
          />

          <Button
            name="_action"
            value="sign-in"
            isLoading={type === "actionSubmission"}
            type="submit"
          >
            Entrar
          </Button>

          <p className={textLinkStyle}>
            <span>Esqueceu sua senha?</span>
            <Link to="/auth/forgot" className={linkStyle}>
              Clique aqui
            </Link>
          </p>
        </Form>
      </section>
    </main>
  );
}
