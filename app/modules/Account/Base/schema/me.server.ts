import { z } from "zod";

export const meSchema = z.object({
  affiliate_actived: z
    .number()
    .transform((data) => (data === 0 ? "Não ativo" : "Ativo")),
  affiliate_link: z.string().nullable(),
  email: z.string(),
  language: z.string().nullable(),
  name: z.string(),
  whatsapp_contact: z.string().nullable(),
  whatsapp_notifications: z.string().nullable(),
});
