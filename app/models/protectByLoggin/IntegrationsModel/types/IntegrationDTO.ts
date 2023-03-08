import { z } from "zod";

export const integrationSchema = z.object({
  id: z.number(),
  name: z.string(),
  url_webhook: z.string(),
  status: z
    .number()
    .transform((test_status) => (test_status === 0 ? "Inativo" : "Ativo")),
  test_status: z
    .number()
    .transform((test_status) =>
      test_status === 0 ? "Não Verificado" : "Verificado"
    ),
  created_at: z
    .string()
    .transform((created_at) => new Date(created_at).toLocaleDateString()),
});

export type IntegrationDTO = z.infer<typeof integrationSchema>;
