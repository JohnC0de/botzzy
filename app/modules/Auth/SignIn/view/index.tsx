/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useFetcher } from "@remix-run/react";

import { Button, Input } from "~/client/components";
import { useToast } from "~/client/hooks";

import {
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

      <p className={textLinkStyle} style={{ marginLeft: "auto" }}>
        <Link to="/auth/forgot" className={linkStyle}>
          Esqueceu sua senha?
        </Link>
      </p>

      <Button
        name="_action"
        value="sign-in"
        isLoading={type === "actionSubmission"}
        type="submit"
      >
        Entrar
      </Button>

      <p className={textLinkStyle}>
        <span>Não possui uma conta?</span>
        <Link to="/auth/signup" className={linkStyle}>
          Clique aqui
        </Link>
      </p>
    </Form>
  );
}
