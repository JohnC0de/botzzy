import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import {
  Button,
  Card,
  Input,
  Modal,
  Select,
  Textarea,
} from "~/client/components";
import { useCrud } from "~/client/hooks";
import type { integrationProps, loaderReturnProps } from "../types";

export function ModalForm() {
  const actionData = useActionData();
  const { state } = useTransition();
  const loaderData = useLoaderData<loaderReturnProps>();

  const { formModal, closeFormModal } = useCrud();
  const initialFields = (formModal?.data as integrationProps) || null;

  const selectOptions = loaderData.integrationTypes.map((item) => ({
    label: item.description || item.name,
    value: item.id.toString(),
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

            <Textarea
              label="Descrição:"
              name="description"
              rows={3}
              placeholder="Escreva aqui..."
              error={actionData?.error?.description}
              defaultValue={initialFields?.description}
            />

            <Select
              label="Tipo de integração:"
              placeholder="Selecione..."
              name="integration_type_id"
              error={actionData?.error?.integration_type_id}
              options={selectOptions}
              defaultValue={selectOptions.find(
                (old) =>
                  old.value === String(initialFields?.integration_type_id)
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

            {initialFields && (
              <Input
                label="Webhook URL:"
                readOnly
                defaultValue={initialFields?.webhook_url}
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
                value={
                  initialFields ? "updateIntegration" : "createIntegration"
                }
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
