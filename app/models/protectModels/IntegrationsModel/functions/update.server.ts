import { z } from "zod";
import { json } from "@remix-run/node";
import { formControl } from "~/server/utils";
import { api } from "~/server/api";

type formProps = z.infer<typeof schema>;
type updateProps = {
  formData: { [x: string]: any };
  token: string;
  account_id: string;
};

const schema = z.object({
  id: z.string().min(1, "O campo é obrigatório."),
  name: z.string().min(1, "O campo é obrigatório."),
  description: z.string().min(1, "O campo é obrigatório."),
  integration_type_id: z.string().min(1, "O campo é obrigatório."),
});

export async function updateIntegration({
  token,
  formData,
  account_id,
}: updateProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data }, 400);

  const url = `/account/${account_id}/integrations/${data.id}`;
  const apiResponse = await api.PUT({
    data: {
      name: data.name,
      description: data.description,
      integration_type_id: data.integration_type_id,
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
