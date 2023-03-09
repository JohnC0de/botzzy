import { z } from "zod";

export const integrationSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  webhook_url: z.string(),
  integration_type_id: z.number(),
  is_active: z
    .number()
    .transform((test_status) => (test_status === 0 ? "Inativo" : "Ativo")),
  created_at: z
    .string()
    .transform((created_at) => new Date(created_at).toLocaleDateString()),
});
