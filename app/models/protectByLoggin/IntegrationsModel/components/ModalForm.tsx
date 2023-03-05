import { Form } from "@remix-run/react";
import { Button, Card, Input, Modal } from "~/client/components";
import { useCrud } from "~/client/hooks";

export function ModalForm() {
  const { formModal, closeFormModal } = useCrud();
  const initialFields = formModal?.data;

  return (
    <Modal
      isVisible={!!formModal}
      title={formModal?.title}
      makeInvisible={closeFormModal}
    >
      <Card space={6}>
        <Form>
          <Card direction="column" spacing={6} style={{ width: 400 }}>
            <Input label="Nome:" name="name" placeholder="Escreva aqui..." />

            <Card
              showBgColor
              spacing={3}
              justify="flex-end"
              style={{ flex: 1 }}
            >
              <Button variant="ghost" type="button" onClick={closeFormModal}>
                Cancelar
              </Button>
              <Button name="_action" value={initialFields ? "save" : "add"}>
                {initialFields ? "Salvar" : "Adicionar"}
              </Button>
            </Card>
          </Card>
        </Form>
      </Card>
    </Modal>
  );
}
