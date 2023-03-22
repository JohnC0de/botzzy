import { z } from "zod";
import { json } from "@remix-run/node";
import { formControl } from "~/server/utils";
import { regex } from "~/server/regex";
import { api } from "~/server/api";

type formProps = z.infer<typeof schema>;
type updateProps = {
  formData: { [x: string]: any };
  token: string;
};
const schema = z.object({
  name: z.string().min(1, "O campo é obrigatório."),
  whatsapp_contact: z
    .string()
    .min(1, "O campo é obrigatório.")
    .regex(regex.PHONE, "Deve ser um numéro de telefone."),
  whatsapp_notifications: z
    .string()
    .min(1, "O campo é obrigatório.")
    .regex(regex.PHONE, "Deve ser um numéro de telefone."),
});

export async function updateProfile({ token, formData }: updateProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data }, 400);

  const url = `/update-info`;
  const apiResponse = await api.POST({ data, token, url });

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
