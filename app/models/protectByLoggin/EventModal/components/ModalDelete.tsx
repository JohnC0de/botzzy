import { Form } from "@remix-run/react";
import { Button, Card, Modal } from "~/client/components";
import { useCrud } from "~/client/hooks";

export function ModalDelete() {
  const { deleteModal, closeDeleteModal } = useCrud();

  return (
    <Modal
      isVisible={!!deleteModal}
      title="Deletar integração"
      makeInvisible={closeDeleteModal}
    >
      <Card space={4}>
        <Form>
          <Card direction="column" spacing={3} style={{ width: 350 }}>
            <p>Você deseja deleta essa integração?</p>

            <Card
              showBgColor
              spacing={2}
              justify="flex-end"
              style={{ flex: 1 }}
            >
              <Button variant="ghost" type="button" onClick={closeDeleteModal}>
                Cancelar
              </Button>
              <Button name="_action" value={"onDelete"}>
                Deletar
              </Button>
            </Card>
          </Card>
        </Form>
      </Card>
    </Modal>
  );
}
