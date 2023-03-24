import { useFetcher, useOutletContext } from "@remix-run/react";

import {
  Button,
  Card,
  Divider,
  Header,
  Input,
  Select,
} from "~/client/components";
import { useRoot } from "~/client/hooks";
import type { OutletContextProps } from "../../Base";

export function View() {
  const { lenguage } = useRoot();
  const { me, state, data } = useOutletContext<OutletContextProps>();
  const { submit } = useFetcher();

  const options = [
    { label: "🇧🇷 Português", value: "pt-br" },
    { label: "🇺🇸 English", value: "en" },
  ];

  return (
    <>
      <Header
        title="Meu perfil"
        subTitle="Informações básicas, como seu nome e endereço, que serão exibidas ao público."
        titleFontSize="lg"
      />

      <Card
        spacing={8}
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <Input
          name="name"
          label="Nome:"
          placeholder="Escreva aqui..."
          defaultValue={me.name}
          error={data?.error?.name}
        />
        <Input
          name="email"
          label="E-mail:"
          placeholder="Escreva aqui..."
          disabled
          defaultValue={me.email}
        />
      </Card>

      <Card
        spacing={8}
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <Input
          name="whatsapp_contact"
          label="Whatsapp para contato:"
          placeholder="Escreva aqui..."
          defaultValue={me.whatsapp_contact || ""}
          error={data?.error?.whatsapp_contact}
        />

        <Input
          name="whatsapp_notifications"
          label="Whatsapp para notificações:"
          placeholder="Escreva aqui..."
          defaultValue={me.whatsapp_notifications || ""}
          error={data?.error?.whatsapp_notifications}
        />
      </Card>

      <span></span>
      <Divider />
      <span></span>

      <Header
        title="Preferências"
        subTitle="Sua preferência personalizada exibida em sua conta."
        titleFontSize="lg"
      />

      <Select
        label="Idioma:"
        isSearchable={false}
        name="lenguage"
        defaultValue={options.find((option) => option.value === lenguage)}
        options={options}
        onChange={(e: any) =>
          submit(
            { lenguage: e.value },
            { action: "/api/switchlenguage", method: "post" }
          )
        }
      />

      <Card justify="flex-end">
        <Button
          variant="default"
          type="submit"
          name="_action"
          value="updateProfile"
          isLoading={state !== "idle"}
        >
          Atualizar
        </Button>
      </Card>
    </>
  );
}
