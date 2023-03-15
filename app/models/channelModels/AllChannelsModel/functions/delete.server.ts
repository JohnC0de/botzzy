import { json } from "@remix-run/node";
import { z } from "zod";
import { api } from "~/server/api";
import { formControl } from "~/server/utils";

type formProps = z.infer<typeof schema>;
type deleteProps = {
  formData: { [x: string]: any };
  token: string;
  account_id: string;
};

const schema = z.object({
  id: z.string({ required_error: "ID não fornecido" }),
});

export async function deleteChannel({
  formData,
  token,
  account_id,
}: deleteProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ toast: { type: "error", message: data.id } });

  const url = `/account/${account_id}/containers/${data.id}`;
  const apiResponse = await api.DELETE({ token, url });

  if (apiResponse.error) {
    return json({
      error: { path: url, message: apiResponse.error },
      toast: { type: "error", message: apiResponse.error },
    });
  }

  return json({
    closeModal: true,
    toast: { type: "warning", message: "Deletado com sucesso." },
  });
}
