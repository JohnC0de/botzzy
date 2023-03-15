import { Form, useTransition } from "@remix-run/react";
import { Button, Card, Input, Modal, Select } from "~/client/components";
import { useCrud } from "~/client/hooks";

export function ModalCreate() {
  const { formModal, closeFormModal } = useCrud();
  const { state } = useTransition();

  return (
    <Modal
      isVisible={!!formModal}
      title={formModal?.title}
      makeInvisible={closeFormModal}
    >
      <Card space={6}>
        <Form method="post">
          <Card direction="column" spacing={6} style={{ width: 400 }}>
            <Select
              label="Tipo de canal"
              isDisabled
              defaultValue={{
                value: "whatsapp",
                label: "Whatsapp (API INTERNA)",
              }}
            />

            <Input
              label="Nome:"
              name="internal_name"
              placeholder="Nome interno do canal"
            />

            <Card
              showBgColor
              spacing={3}
              justify="flex-end"
              style={{ flex: 1 }}
            >
              <Button variant="ghost" type="button" onClick={closeFormModal}>
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
