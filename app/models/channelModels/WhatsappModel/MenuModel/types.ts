import type { z } from "zod";
import type { channelSchema } from "./schema/channelSchema";

export type OutletContextProps = {
  channel: z.infer<typeof channelSchema>;
};
