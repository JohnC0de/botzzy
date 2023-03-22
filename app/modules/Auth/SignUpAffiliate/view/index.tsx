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
      <h2 className={headingStyle}>Faça parte dos nossos afiliados!</h2>
      <p className={textStyle}>
        Preencha os campos abaixo com suas credenciais para se inscrever em
        nossa plataforma.
      </p>

      <Input
        label="Nome:"
        name="name"
        variant="outline"
        placeholder="Escreva aqui..."
        error={data?.error?.name}
      />

      <Input
        label="E-mail:"
        name="email"
        variant="outline"
        placeholder="Escreva aqui..."
        error={data?.error?.email}
      />

      <Input
        label="Telefone:"
        name="whatsapp_contact"
        variant="outline"
        placeholder="Escreva aqui..."
        error={data?.error?.phone}
      />

      <Input
        label="Perfil do Instagram:"
        name="instagram"
        variant="outline"
        placeholder="Escreva aqui..."
        error={data?.error?.instagram}
      />

      <Input
        label="Canal do Youtube:"
        name="youtube"
        variant="outline"
        placeholder="Escreva aqui..."
        error={data?.error?.youtube}
      />

      <Input
        label="Sua senha:"
        type="password"
        name="password"
        variant="outline"
        placeholder="Escreva aqui..."
        error={data?.error?.password}
      />

      <Input
        label="Confirme sua senha:"
        type="password"
        name="confirm_password"
        variant="outline"
        placeholder="Escreva aqui..."
        error={data?.error?.confirm_password}
      />

      <Button
        name="_action"
        value="sign-up-affiliate"
        isLoading={type === "actionSubmission"}
        type="submit"
      >
        Se inscrever
      </Button>

      <p className={textLinkStyle}>
        <span>Já possui uma conta?</span>
        <Link to="/auth/signin" className={linkStyle}>
          Clique aqui
        </Link>
      </p>
    </Form>
  );
}
