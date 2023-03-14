import type { z } from "zod";
import type { channelSchema } from "./schema/channelSchema";

export type channelProps = z.infer<typeof channelSchema>;

export type loaderReturnProps = {
  channels: channelProps[];
  toast: null | { type: "error"; message: string };
};
