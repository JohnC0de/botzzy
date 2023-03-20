import { z } from "zod";

export const salesSchema = z
  .object({
    id: z.number(),
    nome: z.string(),
    amount: z.string().transform((amount) =>
      Number(amount).toLocaleString("pt-br", {
        currency: "BRL",
        style: "currency",
      })
    ),
    comission: z.string().transform((comission) =>
      Number(comission).toLocaleString("pt-br", {
        currency: "BRL",
        style: "currency",
      })
    ),
    created_at: z
      .string()
      .transform((date) => new Date(date).toLocaleDateString("pt-br")),
  })
  .transform((data) => ({
    id: data.id,
    name: data.nome,
    amount: data.amount,
    comission: data.comission,
    created_at: data.created_at,
  }));
