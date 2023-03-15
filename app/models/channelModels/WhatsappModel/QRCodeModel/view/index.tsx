import {
  Form,
  useActionData,
  useOutletContext,
  useTransition,
} from "@remix-run/react";
import { useEffect } from "react";
import { Button, Card, Divider, Header, Input } from "~/client/components";
import { useToast } from "~/client/hooks";
import type { OutletContextProps } from "../../MenuModel";

export function View() {
  const { channel } = useOutletContext<OutletContextProps>();

  const actionData = useActionData();
  const { state } = useTransition();
  const { fireToast } = useToast();

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
          title="Dados principais"
          subTitle="Edite e visualize os dados principais de seu canal."
          titleFontSize="lg"
        />

        <Form>
          <Card direction="column" spacing={8}>
            <Card align="center" justify="space-between">
              <strong>Nome</strong>
              <Input disabled defaultValue={channel.name} />
            </Card>
            <Card align="center">
              <strong style={{ flex: 1 }}>Nome interno</strong>
              <Input
                name="internal_name"
                defaultValue={channel.internal_name}
                style={{ flex: 2 }}
              />
            </Card>
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
                Salvar
              </Button>
            </Card>
          </Card>
        </Form>

        <Divider />

        <Header
          title="Status de conexão"
          subTitle="Verifique a conexão do canal com seu Whatsapp."
          titleFontSize="lg"
        />
      </Card>
    </Form>
  );
}
