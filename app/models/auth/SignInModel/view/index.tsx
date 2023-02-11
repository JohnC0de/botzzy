import { Link, useFetcher } from "@remix-run/react";
import { Button, Input } from "~/client/components";
import {
  viewContainerStyle,
  heroContainerStyle,
  formContainerStyle,
  formStyle,
  headingStyle,
  textStyle,
  linkStyle,
} from "./styles.css";

export function View() {
  const { Form, data, type } = useFetcher();

  return (
    <main className={viewContainerStyle}>
      <section className={heroContainerStyle}>as</section>

      <section className={formContainerStyle}>
        <Form method="post" className={formStyle}>
          <h1 className={headingStyle}>Faça seu login</h1>
          <p className={textStyle}>
            Preencha os campos abaixo com seu e-mail e senha para acessar nossa
            plataforma.
          </p>

          <Input
            label="E-mail:"
            name="email"
            placeholder="Escreva aqui..."
            variant="outline"
            error={data?.error?.email}
          />

          <Input
            label="Senha"
            placeholder="Escreva aqui..."
            variant="outline"
          />

          <Button isLoading={type === "actionSubmission"} type="submit">
            Entrar
          </Button>
          <Link to="/auth/forgot" className={linkStyle}>
            Esqueci minha senha
          </Link>
        </Form>
      </section>
    </main>
  );
}
