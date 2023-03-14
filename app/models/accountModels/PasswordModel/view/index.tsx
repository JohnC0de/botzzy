import { Form, useActionData, useTransition } from "@remix-run/react";
import { useEffect } from "react";
import { Button, Card, Divider, Header } from "~/client/components";
import { useToast } from "~/client/hooks";
import { InputCard } from "../components/InputCard";

export function View() {
  const actionData = useActionData();
  const { fireToast } = useToast();
  const { state } = useTransition();

  function handleReset() {
    if (window) window.location.reload();
  }

  useEffect(() => {
    if (actionData?.toast) fireToast(actionData.toast);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);

  return (
    <Form method="post">
      <Card direction="column" space={4} spacing={8}>
        <Header
          title="Resetar senha"
          subTitle="Digite sua senha atual e nova para redefinir sua senha."
          titleFontSize="lg"
        />

        <InputCard
          label="Senha atual"
          name="old_password"
          error={actionData?.error?.old_password}
        />

        <Divider />

        <InputCard
          label="Nova senha"
          name="password"
          error={actionData?.error?.password}
        />

        <Divider />

        <InputCard
          label="Confirmar senha"
          name="confirm_password"
          error={actionData?.error?.confirm_password}
        />

        <Card align="center" justify="flex-end" spacing={2} showBgColor>
          <Button variant="ghost" type="button" onClick={handleReset}>
            Resetar
          </Button>
          <Button
            variant="default"
            isLoading={state === "submitting"}
            name="_action"
            value="updatePassword"
          >
            Atualizar senha
          </Button>
        </Card>
      </Card>
    </Form>
  );
}
