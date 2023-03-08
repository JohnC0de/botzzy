import { Form } from "@remix-run/react";
import { Button, Card, Input, MaskedInput, Modal } from "~/client/components";

type CardModalProps = {
  initialValue?: any;
  isOpen: boolean;
  onClose: () => void;
};
export function CardModal({ isOpen, onClose, initialValue }: CardModalProps) {
  const isCreating = !initialValue;
  return (
    <Modal
      title={isCreating ? "Adicionar cartão" : "Editar cartão"}
      isVisible={isOpen}
      makeInvisible={onClose}
    >
      <Card space={6}>
        <Form>
          <Card direction="column" spacing={6}>
            <Input label="Nome do Titular:" placeholder="Escreva aqui..." />
            <MaskedInput
              label="Número do cartão de crédito"
              mask="9999 9999 9999 9999"
              placeholder="**** **** **** ****"
              maskChar={null}
            />
            <Card direction="row" spacing={3}>
              <Input
                label="Data de expiração:"
                style={{ height: "3rem" }}
                type="date"
              />
              <MaskedInput
                style={{ height: "3rem" }}
                mask="999"
                label="CVV:"
                placeholder="***"
                maskChar={null}
              />
            </Card>
            <Button>{isCreating ? "Adicionar" : "Salvar"}</Button>
          </Card>
        </Form>
      </Card>
    </Modal>
  );
}
