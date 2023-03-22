import {
  Form,
  useActionData,
  useOutletContext,
  useTransition,
} from "@remix-run/react";
import { Button, Card, Divider, Header } from "~/client/components";
import { InputCard } from "../components/InputCard";
import type { OutletContextProps } from "../../Base";

export function View() {
  const { me } = useOutletContext<OutletContextProps>();
  const { state } = useTransition();
  const actionData = useActionData();
  const handleReset = () => window && window.location.reload();

  return (
    <Form method="post">
      <Card direction="column" space={4} spacing={8}>
        <Header
          title="Meu perfil"
          subTitle="Informações básicas, como seu nome e endereço, que serão exibidas ao público."
          titleFontSize="lg"
        />

        <InputCard
          name="name"
          label="Nome"
          placeholder="Escreva aqui..."
          defaultValue={me.name}
          error={actionData?.error?.name}
        />

        <Divider />

        <InputCard
          name="email"
          label="Email"
          placeholder="Escreva aqui..."
          isDisabled
          defaultValue={me.email}
        />

        <Divider />

        <InputCard
          name="whatsapp_contact"
          label="Whatsapp para contato"
          placeholder="Escreva aqui..."
          defaultValue={me.whatsapp_contact || ""}
          error={actionData?.error?.whatsapp_contact}
        />

        <Divider />

        <InputCard
          name="whatsapp_notifications"
          label="Whatsapp para notificações"
          placeholder="Escreva aqui..."
          defaultValue={me.whatsapp_notifications || ""}
          error={actionData?.error?.whatsapp_notifications}
        />
        <span></span>
        <span></span>

        <Header
          title="Preferências"
          subTitle="Sua preferência personalizada exibida em sua conta."
          titleFontSize="lg"
        />

        <InputCard
          label="Idioma"
          name="lenguage"
          placeholder="Seu email aqui..."
          defaultValue="Português"
          isDisabled
        />

        <Card align="center" justify="flex-end" spacing={2} showBgColor>
          <Button type="button" variant="ghost" onClick={handleReset}>
            Resetar
          </Button>
          <Button
            type="submit"
            variant="default"
            name="_action"
            value="updateProfile"
            isLoading={state !== "idle"}
          >
            Atualizar
          </Button>
        </Card>
      </Card>
    </Form>
  );
}
