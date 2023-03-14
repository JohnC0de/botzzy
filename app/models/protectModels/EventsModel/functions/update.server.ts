import { z } from "zod";
import { json } from "@remix-run/node";
import { formControl } from "~/server/utils";
import { api } from "~/server/api";

type formProps = z.infer<typeof schema>;
type updateProps = {
  formData: { [x: string]: any };
  token: string;
  id: string;
  account_id: string;
};
const schema = z.object({
  id: z.string().min(1, "O campo é obrigatório."),
  name: z.string().min(1, "O campo é obrigatório."),
  integration_type_event_id: z.string().min(1, "O campo é obrigatório."),
});

export async function updateEvent({
  token,
  formData,
  account_id,
  id,
}: updateProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data }, 400);

  const url = `/account/${account_id}/integrationEvents/${data.id}`;
  const apiResponse = await api.PUT({
    data: {
      name: data.name,
      integration_type_event_id: data.integration_type_event_id,
      integration_id: id,
    },
    token,
    url,
  });

  if (apiResponse.error) {
    return json({
      error: { path: url, message: apiResponse.error },
      toast: { type: "error", message: apiResponse.error },
    });
  }

  return json({
    toast: { type: "success", message: "Atualizado com sucesso." },
    closeModal: true,
  });
}
