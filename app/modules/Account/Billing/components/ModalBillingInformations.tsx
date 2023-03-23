import { useOutletContext } from "@remix-run/react";
import { useEffect } from "react";
import { Button, Card, Input, MaskedInput, Modal } from "~/client/components";
import type { OutletContextProps } from "../../Base";

type ModalBillingInformationsProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ModalBillingInformations({
  isOpen,
  onClose,
}: ModalBillingInformationsProps) {
  const { accountInfo, state, data } = useOutletContext<OutletContextProps>();
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

  useEffect(() => {
    if (data?.closeModal) onClose();
  }, [data, onClose]);

  return (
    <Modal
      isVisible={isOpen}
      title="Editar informações de cobrança"
      makeInvisible={onClose}
    >
      <Card space={8}>
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
            error={data?.error?.name}
            defaultValue={accountInfo.name}
          />
          <MaskedInput
            mask="999.999.999-99"
            label="CPF:"
            name="cpf"
            error={data?.error?.cpf}
            defaultValue={billingInformation.cpf}
          />
          <Input
            label="Pais:"
            name="country"
            error={data?.error?.country}
            defaultValue={billingInformation.country}
          />
          <Input
            label="Estado:"
            name="state"
            error={data?.error?.state}
            defaultValue={billingInformation.state}
          />
          <Input
            label="Cidade:"
            name="city"
            error={data?.error?.city}
            defaultValue={billingInformation.city}
          />
          <Input
            label="Bairro:"
            name="district"
            error={data?.error?.district}
            defaultValue={billingInformation.district}
          />
          <MaskedInput
            mask="99999-999"
            label="CEP:"
            name="postal_code"
            error={data?.error?.postal_code}
            defaultValue={billingInformation.postal_code}
          />
          <Input
            label="Endereço:"
            name="address"
            error={data?.error?.address}
            defaultValue={billingInformation.address}
          />
          <Input
            label="Numero:"
            name="number"
            error={data?.error?.number}
            defaultValue={billingInformation.number}
          />
          <Input
            label="Complemento:"
            name="complement"
            error={data?.error?.complement}
            defaultValue={billingInformation.complement}
          />

          <Card
            showBgColor
            spacing={3}
            justify="flex-end"
            style={{ flex: 1, gridColumn: "1 / 3" }}
          >
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              name="_action"
              type="submit"
              isLoading={state === "submitting"}
              value="updateBillingInformation"
            >
              Salvar
            </Button>
          </Card>
        </Card>
      </Card>
    </Modal>
  );
}
