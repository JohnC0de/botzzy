import { z } from "zod";

export const cardSchema = z
  .object({
    id: z.number(),
    processor: z.string(),
    Holder: z.string(),
    CardNumber: z.string(),
    ExpirationDate: z.string(),
    created_at: z
      .string()
      .transform((data) => new Date(data).toLocaleDateString("pt-br")),
  })
  .transform((data) => ({
    id: data.id,
    processor: data.processor,
    holder: data.Holder,
    card_number: data.CardNumber,
    expiration_date: data.ExpirationDate,
    created_at: data.created_at,
  }));
