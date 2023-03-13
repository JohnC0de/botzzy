import type { z } from "zod";
import type { meSchema } from "./schema/me.server";

export type OutletContextProps = {
  me: z.infer<typeof meSchema>;
};
