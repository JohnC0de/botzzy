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
  name: z.string().min(1, "O campo é obrigatório."),
  cpf: z.string().min(1, "O campo é obrigatório."),
  country: z.string().min(1, "O campo é obrigatório."),
  state: z.string().min(1, "O campo é obrigatório."),
  city: z.string().min(1, "O campo é obrigatório."),
  district: z.string().min(1, "O campo é obrigatório."),
  postal_code: z.string().min(1, "O campo é obrigatório."),
  address: z.string().min(1, "O campo é obrigatório."),
  number: z.string().min(1, "O campo é obrigatório."),
  complement: z.string().min(1, "O campo é obrigatório."),
});

export async function updateBillingInformation({
  token,
  formData,
  account_id,
}: updateProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data }, 400);

  const reformulatedData = {
    name: data.name,
    billing_information: {
      cpf: data.cpf,
      country: data.country,
      state: data.state,
      city: data.city,
      district: data.district,
      postal_code: data.postal_code,
      address: data.address,
      number: data.number,
      complement: data.complement,
    },
  };

  const url = `/account/${account_id}/accounts/update-info`;
  const apiResponse = await api.POST({ data: reformulatedData, token, url });

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
