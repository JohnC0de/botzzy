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
          <h1 className={headingStyle}>Recuperar senha?</h1>
          <p className={textStyle}>
            Digite seu e-mail no campo abaixo para receber um link e resetar sua
            senha.
          </p>

          <Input
            label="E-mail:"
            name="email"
            variant="outline"
            placeholder="Escreva aqui..."
            error={data?.error?.email}
          />

          <Button
            name="_action"
            value="forgot"
            isLoading={type === "actionSubmission"}
            type="submit"
          >
            Enviar
          </Button>

          <p className={textLinkStyle}>
            <span>Voltar para o</span>
            <Link to="/auth/signin" className={linkStyle}>
              Login
            </Link>
          </p>
        </Form>
      </section>
    </main>
  );
}
