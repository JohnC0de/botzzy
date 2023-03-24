import { z } from "zod";

export const integrationTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
});
