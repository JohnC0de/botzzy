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
} from "./styles.css";

export function View() {
  const { fireToast } = useToast();
  const { Form, data, type } = useFetcher();

  useEffect(() => {
    if (data?.toast) fireToast(data.toast);
  }, [data, fireToast]);

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

          <Link to="/auth/forgot" className={linkStyle}>
            Esqueci minha senha
          </Link>
        </Form>
      </section>
    </main>
  );
}
