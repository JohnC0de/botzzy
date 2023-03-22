import { Form, useActionData, useTransition } from "@remix-run/react";
import { useEffect } from "react";
import { Button, Card, Input, MaskedInput, Modal } from "~/client/components";

type CardModalProps = {
  initialValue?: any;
  isOpen: boolean;
  onClose: () => void;
};
export function CardModal({ isOpen, onClose, initialValue }: CardModalProps) {
  const isCreating = !initialValue;
  const actionData = useActionData();
  const { state } = useTransition();

  useEffect(() => {
    if (actionData?.closeModal) onClose();
  }, [actionData, onClose]);

  return (
    <Modal
      title={isCreating ? "Adicionar cartão" : "Editar cartão"}
      isVisible={isOpen}
      makeInvisible={onClose}
    >
      <Form method="post">
        <Card direction="column" spacing={6} space={8}>
          <Input
            name="holder"
            label="Nome do Titular:"
            placeholder="Escreva aqui..."
            error={actionData?.error?.holder}
          />

          <MaskedInput
            name="card_number"
            label="Número do cartão de crédito:"
            mask="9999 9999 9999 9999"
            placeholder="**** **** **** ****"
            maskChar={null}
            error={actionData?.error?.card_number}
          />

          <Card direction="row" spacing={3}>
            <MaskedInput
              label="Data de expiração:"
              mask="99/99"
              name="expiration_date"
              maskChar={null}
              error={actionData?.error?.expiration_date}
            />

            <MaskedInput
              mask="999"
              label="CVV:"
              name="cvv"
              placeholder="***"
              maskChar={null}
              error={actionData?.error?.cvv}
            />
          </Card>
          <Button
            isLoading={state === "submitting"}
            name="_action"
            value="addCreditCard"
            type="submit"
          >
            {isCreating ? "Adicionar" : "Salvar"}
          </Button>
        </Card>
      </Form>
    </Modal>
  );
}
