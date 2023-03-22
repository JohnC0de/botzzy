/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useFetcher, useParams } from "@remix-run/react";

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
  const params = useParams();
  const { Form, data, type } = useFetcher();

  useEffect(() => {
    if (data?.toast) fireToast(data.toast);
  }, [data]);

  return (
    <Form method="post" className={formStyle}>
      <h1 className={headingStyle}>Recuperar senha</h1>
      <p className={textStyle}>
        {params?.token
          ? "Digite sua nova senha no campo abaixo."
          : "Digite seu e-mail no campo abaixo para receber um link e resetar sua senha."}
      </p>

      {params?.token ? (
        <Input
          label="Nova senha:"
          name="password"
          variant="outline"
          placeholder="Escreva aqui..."
          error={data?.error?.password}
        />
      ) : (
        <Input
          label="E-mail:"
          name="email"
          variant="outline"
          placeholder="Escreva aqui..."
          error={data?.error?.email}
        />
      )}

      <Button
        name="_action"
        value={params?.token ? "reset_password" : "forgot"}
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
  );
}
