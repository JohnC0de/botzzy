import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import { Button, Card, Input, Modal, Select } from "~/client/components";
import { useCrud } from "~/client/hooks";
import type { eventProps, loaderReturnProps } from "../types";

export function ModalForm() {
  const actionData = useActionData();
  const { state } = useTransition();
  const loaderData = useLoaderData<loaderReturnProps>();

  const { formModal, closeFormModal } = useCrud();
  const initialFields = (formModal?.data as eventProps) || null;

  const selectOptions = loaderData.eventTypes.map((item) => ({
    label: item.description || item.name,
    value: item.id,
  }));

  return (
    <Modal
      isVisible={!!formModal}
      title={formModal?.title}
      makeInvisible={closeFormModal}
    >
      <Card space={8}>
        <Form method="post">
          <Card direction="column" spacing={8} style={{ width: 500 }}>
            <Input
              label="Nome:"
              name="name"
              placeholder="Escreva aqui..."
              error={actionData?.error?.name}
              defaultValue={initialFields?.name}
            />

            <Select
              label="Tipo de evento:"
              name="integration_type_event_id"
              options={selectOptions}
              error={actionData?.error?.integration_type_event_id}
              defaultValue={selectOptions.find(
                (item) =>
                  item.value === initialFields?.integration_type_event_id
              )}
            />

            {initialFields && (
              <input
                type="hidden"
                name="id"
                value={initialFields?.id}
                readOnly
              />
            )}

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
                type="submit"
                isLoading={state === "submitting"}
                value={initialFields ? "updateEvent" : "createEvent"}
              >
                {initialFields ? "Salvar" : "Adicionar"}
              </Button>
            </Card>
          </Card>
        </Form>
      </Card>
    </Modal>
  );
}
