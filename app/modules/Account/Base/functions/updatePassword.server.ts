import { z } from "zod";
import { json } from "@remix-run/node";
import { formControl } from "~/server/utils";
import { api } from "~/server/api";

type formProps = z.infer<typeof schema>;
type updateProps = {
  formData: { [x: string]: any };
  token: string;
};

const schema = z
  .object({
    old_password: z.string().min(1, "O campo é obrigatório."),
    password: z.string().min(1, "O campo é obrigatório."),
    confirm_password: z.string().min(1, "O campo é obrigatório."),
  })
  .refine((check) => check.confirm_password === check.password, {
    path: ["confirm_password"],
    message: "Os campos devem ser iguais",
  });

export async function updatePassword({ token, formData }: updateProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data }, 400);

  const url = `/change-password`;
  const apiResponse = await api.POST({
    data: { password: data.password, old_password: data.old_password },
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
