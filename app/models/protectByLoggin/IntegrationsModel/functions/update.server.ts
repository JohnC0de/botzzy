import { z } from "zod";
import { json } from "@remix-run/node";
import { formControl } from "~/server/utils";
import { api } from "~/server/api";

type formProps = z.infer<typeof schema>;
type updateProps = {
  formData: { [x: string]: any };
  token: string;
};

const schema = z.object({
  id: z.string().min(1, "O campo é obrigatório."),
  name: z.string().min(1, "O campo é obrigatório."),
  title: z.string().min(1, "O campo é obrigatório."),
  content: z.string().min(1, "O campo é obrigatório."),
  hotmartProduct_category_id: z.string().min(1, "O campo é obrigatório."),
});

export async function updateIntegration({ token, formData }: updateProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data }, 400);

  const url = `/hotmartProducts/${data.id}`;
  const apiResponse = await api.PUT({
    data: {
      name: data.name,
      title: data.title,
      content: data.content,
      hotmartProduct_category_id: data.hotmartProduct_category_id,
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
    toast: { type: "success", message: "Item atualizado com sucesso." },
    closeModal: true,
  });
}
