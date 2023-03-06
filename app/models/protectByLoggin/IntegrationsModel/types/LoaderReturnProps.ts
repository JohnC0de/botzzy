import type { IntegrationDTO } from "./IntegrationDTO";

export type LoaderReturnProps = {
  integrations: IntegrationDTO[];
  toast: null | { type: "error"; message: string };
};
