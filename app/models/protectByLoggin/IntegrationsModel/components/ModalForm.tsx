import { Form, useActionData, useTransition } from "@remix-run/react";
import { Button, Card, Input, Modal } from "~/client/components";
import { useCrud } from "~/client/hooks";

export function ModalForm() {
  const { formModal, closeFormModal } = useCrud();
  const initialFields = formModal?.data;

  const actionData = useActionData();
  const { state } = useTransition();

  console.log(initialFields);
  return (
    <Modal
      isVisible={!!formModal}
      title={formModal?.title}
      makeInvisible={closeFormModal}
    >
      <Card space={6}>
        <Form method="post">
          <Card direction="column" spacing={6} style={{ width: 400 }}>
            <Input
              label="Nome:"
              name="name"
              placeholder="Escreva aqui..."
              error={actionData?.error?.name}
              defaultValue={initialFields?.name}
              readOnly={!!initialFields}
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
              <>
                <Input
                  label="Titulo:"
                  name="title"
                  placeholder="Escreva aqui..."
                  error={actionData?.error?.title}
                  defaultValue={initialFields?.title}
                />
                <Input
                  label="Conteúdo:"
                  name="content"
                  placeholder="Escreva aqui..."
                  error={actionData?.error?.content}
                  defaultValue={initialFields?.content}
                />
                <Input
                  label="Categoria:"
                  name="hotmartProduct_category_id"
                  placeholder="Escreva aqui..."
                  error={actionData?.error?.hotmartProduct_category_id}
                  defaultValue={initialFields?.hotmartProduct_category_id}
                />
              </>
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
