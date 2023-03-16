import { Form, useTransition } from "@remix-run/react";
import { Button, Card, Input, MaskedInput, Modal } from "~/client/components";

type ModalBillingInformationsProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ModalBillingInformations({
  isOpen,
  onClose,
}: ModalBillingInformationsProps) {
  const { state } = useTransition();

  return (
    <Modal
      isVisible={isOpen}
      title="Editar informações de cobrança"
      makeInvisible={onClose}
    >
      <Card space={8}>
        <Form method="post">
          <Card
            direction="column"
            spacing={6}
            style={{
              width: 700,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <Input label="Nome completo:" name="name" />
            <MaskedInput mask="999.999.999-99" label="CPF:" name="name" />
            <Input label="Pais:" name="country" />
            <Input label="Estado:" name="state" />
            <Input label="Cidade:" name="city" />
            <Input label="Bairro:" name="district" />
            <MaskedInput mask="99999-999" label="CEP:" name="cep" />
            <Input label="Endereço:" name="address" />
            <Input label="Numero:" name="number" />
            <Input label="Complemento:" name="complement" />

            <Card
              showBgColor
              spacing={3}
              justify="flex-end"
              style={{ flex: 1, gridColumn: "1 / 3" }}
            >
              <Button variant="ghost" type="button" onClick={onClose}>
                Cancelar
              </Button>
              <Button
                name="_action"
                isLoading={state === "submitting"}
                value="createChannel"
              >
                Criar
              </Button>
            </Card>
          </Card>
        </Form>
      </Card>
    </Modal>
  );
}
