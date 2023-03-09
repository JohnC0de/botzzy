import type { z } from "zod";
import type { integrationSchema, integrationTypeSchema } from "./schemas";

export type integrationProps = z.infer<typeof integrationSchema>;
export type integrationTpesProps = z.infer<typeof integrationTypeSchema>;

export type loaderReturnProps = {
  integrations: integrationProps[];
  integrationTypes: integrationTpesProps[];
  toast: { message: string; type: "error" };
};
