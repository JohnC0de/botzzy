import { z } from "zod";

export const integrationSchema = z.object({
  id: z.number(),
  name: z.string(),
  integration_type_id: z.number(),
  description: z.string(),
});
