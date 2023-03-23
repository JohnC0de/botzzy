import { useOutletContext } from "@remix-run/react";

import { Button, Card, Header, Input } from "~/client/components";
import type { OutletContextProps } from "../../Base";

export function View() {
  const { data, state } = useOutletContext<OutletContextProps>();

  return (
    <>
      <Header
        title="Resetar senha"
        subTitle="Digite sua senha atual e nova para redefinir sua senha."
        titleFontSize="lg"
      />

      <Card
        spacing={8}
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <Input
          label="Senha atual:"
          name="old_password"
          error={data?.error?.old_password}
        />
        <Input
          label="Nova senha:"
          name="password"
          error={data?.error?.password}
        />
        <Input
          label="Confirmar senha:"
          name="confirm_password"
          error={data?.error?.confirm_password}
        />
      </Card>

      <Card justify="flex-end">
        <Button
          variant="default"
          isLoading={state !== "idle"}
          name="_action"
          value="updatePassword"
        >
          Atualizar senha
        </Button>
      </Card>
    </>
  );
}
