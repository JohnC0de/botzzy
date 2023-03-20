import type { z } from "zod";
import type {
  eventSchema,
  eventTypeSchema,
  integrationSchema,
} from "./schemas";

export type eventProps = z.infer<typeof eventSchema>;
export type eventTypesProps = z.infer<typeof eventTypeSchema>;

export type loaderReturnProps = {
  events: eventProps[];
  integration: z.infer<typeof integrationSchema>;
  eventTypes: eventTypesProps[];
  toast: { message: string; type: "error" };
};
