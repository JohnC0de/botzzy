import type { IntegrationDTO } from "./IntegrationDTO";
import type { IntegrationTypeDTO } from "./IntegrationTypeDTO";

export type LoaderReturnProps = {
  integrations: IntegrationDTO[];
  integrationTypes: IntegrationTypeDTO[];
  toast: null | { type: "error"; message: string };
};
