import { z } from "zod";

export const paymentSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  created_at: z
    .string()
    .transform((created_at) =>
      new Date(created_at).toLocaleDateString("pt-br")
    ),
  amount: z.string().transform((amount) =>
    Number(amount).toLocaleString("pt-br", {
      currency: "BRL",
      style: "currency",
    })
  ),
  // status: z.string(),
});
