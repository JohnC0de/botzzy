import { z } from "zod";

export const eventSchema = z.object({
  id: z.number(),
  name: z.string(),
  flow_id: z.number(),
  event_name: z.string(),
  integration_type_event_id: z.number(),
  test_status: z
    .number()
    .transform((test_status) =>
      test_status === 0 ? "Não testado" : "Testado"
    ),
  is_active: z
    .number()
    .transform((is_active) => (is_active === 0 ? "Inativo" : "Ativo")),
});
