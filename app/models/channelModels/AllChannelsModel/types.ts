import type { z } from "zod";
import type { channelSchema, fullChannelSchema } from "./schema/channelSchema";

export type channelProps = z.infer<typeof channelSchema>;
export type whatsappChannelProps = z.infer<typeof fullChannelSchema>;

export type loaderReturnProps = {
  channels: channelProps[];
  toast: null | { type: "error"; message: string };
};
