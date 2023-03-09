import { z } from "zod";

export const integrationTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export type IntegrationTypeDTO = z.infer<typeof integrationTypeSchema>;
