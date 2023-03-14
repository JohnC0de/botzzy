import { z } from "zod";
import { json } from "@remix-run/node";

import { api } from "~/server/api";
import { formControl } from "~/server/utils";

type formProps = z.infer<typeof schema>;
type createProps = {
  formData: { [x: string]: any };
  token: string;
  account_id: string;
};

const schema = z.object({
  internal_name: z.string().min(1, "O campo é obrigatório."),
});

export async function createChannel({
  formData,
  token,
  account_id,
}: createProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data }, 400);

  const url = `/account/${account_id}/containers`;
  const apiResponse = await api.POST({ url, token, data });

  if (apiResponse.error) {
    return json({
      error: { path: url, message: apiResponse.error },
      toast: { type: "error", message: apiResponse.error },
    });
  }

  return json({
    toast: { type: "success", message: "Canal cadastrado com sucesso." },
    closeModal: true,
  });
}
