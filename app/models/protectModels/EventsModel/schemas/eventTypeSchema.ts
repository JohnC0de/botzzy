import { z } from "zod";

export const eventTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
});
