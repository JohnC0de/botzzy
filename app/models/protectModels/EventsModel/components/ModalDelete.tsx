import { Form, useTransition } from "@remix-run/react";
import { Button, Card, Modal } from "~/client/components";
import { useCrud } from "~/client/hooks";

export function ModalDelete() {
  const { deleteModal, closeDeleteModal } = useCrud();
  const { state } = useTransition();
  return (
    <Modal
      isVisible={!!deleteModal}
      title="Deletar evento"
      makeInvisible={closeDeleteModal}
    >
      <Card space={6}>
        <Form method="post">
          <Card direction="column" spacing={6} style={{ width: 400 }}>
            <p>Você deseja deleta essa integração?</p>
            <input type="hidden" name="id" value={deleteModal?.toString()} />
            <Card
              showBgColor
              spacing={3}
              justify="flex-end"
              style={{ flex: 1 }}
            >
              <Button variant="ghost" type="button" onClick={closeDeleteModal}>
                Cancelar
              </Button>
              <Button
                name="_action"
                isLoading={state === "submitting"}
                value="deleteEvent"
              >
                Deletar
              </Button>
            </Card>
          </Card>
        </Form>
      </Card>
    </Modal>
  );
}
