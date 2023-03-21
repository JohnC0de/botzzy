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
  holder: z.string().min(1, "O campo é obrigatório."),
  card_number: z.string().min(1, "O campo é obrigatório."),
  expiration_date: z.string().min(1, "O campo é obrigatório."),
  cvv: z.string().min(1, "O campo é obrigatório."),
});

export async function addCreditCard({
  token,
  formData,
  account_id,
}: updateProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data }, 400);

  const reformulatedData = {
    cvv: data.cvv,
    ExpirationDate: data.expiration_date,
    CardNumber: data.card_number,
    Holder: data.holder,
  };

  const url = `/account/${account_id}/cardTokens`;
  const apiResponse = await api.POST({ data: reformulatedData, token, url });

  if (apiResponse.error) {
    return json({
      error: { path: url, message: apiResponse.error },
      toast: { type: "error", message: apiResponse.error },
    });
  }

  return json({
    toast: { type: "success", message: "Adicionado com sucesso." },
    closeModal: true,
  });
}
