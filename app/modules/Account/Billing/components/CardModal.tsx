import { useOutletContext } from "@remix-run/react";
import { useEffect } from "react";
import { Button, Card, Input, MaskedInput, Modal } from "~/client/components";
import type { OutletContextProps } from "../../Base";

type CardModalProps = {
  initialValue?: any;
  isOpen: boolean;
  onClose: () => void;
};
export function CardModal({ isOpen, onClose, initialValue }: CardModalProps) {
  const isCreating = !initialValue;
  const { data, state } = useOutletContext<OutletContextProps>();

  useEffect(() => {
    if (data?.closeModal) onClose();
  }, [data, onClose]);

  return (
    <Modal
      title={isCreating ? "Adicionar cartão" : "Editar cartão"}
      isVisible={isOpen}
      makeInvisible={onClose}
    >
      <Card direction="column" spacing={6} space={8}>
        <Input
          name="holder"
          label="Nome do Titular:"
          placeholder="Escreva aqui..."
          error={data?.error?.holder}
        />

        <MaskedInput
          name="card_number"
          label="Número do cartão de crédito:"
          mask="9999 9999 9999 9999"
          placeholder="**** **** **** ****"
          maskChar={null}
          error={data?.error?.card_number}
        />

        <Card direction="row" spacing={3}>
          <MaskedInput
            label="Data de expiração:"
            mask="99/99"
            name="expiration_date"
            maskChar={null}
            error={data?.error?.expiration_date}
          />

          <MaskedInput
            mask="999"
            label="CVV:"
            name="cvv"
            placeholder="***"
            maskChar={null}
            error={data?.error?.cvv}
          />
        </Card>

        <Button
          type="submit"
          name="_action"
          isLoading={state === "submitting"}
          value="addCreditCard"
        >
          {isCreating ? "Adicionar" : "Salvar"}
        </Button>
      </Card>
    </Modal>
  );
}
