import {
  Form,
  useActionData,
  useOutletContext,
  useTransition,
} from "@remix-run/react";
import { useEffect } from "react";
import { Button, Card, Input, MaskedInput, Modal } from "~/client/components";
import { useToast } from "~/client/hooks";
import type { OutletContextProps } from "../../AccountModel";

type ModalBillingInformationsProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ModalBillingInformations({
  isOpen,
  onClose,
}: ModalBillingInformationsProps) {
  const { state } = useTransition();
  const actionData = useActionData();

  const { accountInfo } = useOutletContext<OutletContextProps>();
  const billingInformation = JSON.parse(accountInfo.billing_information) as {
    address: string;
    city: string;
    complement: string;
    country: string;
    cpf: string;
    district: string;
    number: string;
    postal_code: string;
    state: string;
  };

  const { fireToast } = useToast();

  useEffect(() => {
    if (actionData?.toast) fireToast(actionData?.toast);
    if (actionData?.closeModal) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);

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
            <Input
              label="Nome completo:"
              name="name"
              error={actionData?.error?.name}
              defaultValue={accountInfo.name}
            />
            <MaskedInput
              mask="999.999.999-99"
              label="CPF:"
              name="cpf"
              error={actionData?.error?.cpf}
              defaultValue={billingInformation.cpf}
            />
            <Input
              label="Pais:"
              name="country"
              error={actionData?.error?.country}
              defaultValue={billingInformation.country}
            />
            <Input
              label="Estado:"
              name="state"
              error={actionData?.error?.state}
              defaultValue={billingInformation.state}
            />
            <Input
              label="Cidade:"
              name="city"
              error={actionData?.error?.city}
              defaultValue={billingInformation.city}
            />
            <Input
              label="Bairro:"
              name="district"
              error={actionData?.error?.district}
              defaultValue={billingInformation.district}
            />
            <MaskedInput
              mask="99999-999"
              label="CEP:"
              name="postal_code"
              error={actionData?.error?.postal_code}
              defaultValue={billingInformation.postal_code}
            />
            <Input
              label="Endereço:"
              name="address"
              error={actionData?.error?.address}
              defaultValue={billingInformation.address}
            />
            <Input
              label="Numero:"
              name="number"
              error={actionData?.error?.number}
              defaultValue={billingInformation.number}
            />
            <Input
              label="Complemento:"
              name="complement"
              error={actionData?.error?.complement}
              defaultValue={billingInformation.complement}
            />

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
                value="updateBillingInformation"
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
