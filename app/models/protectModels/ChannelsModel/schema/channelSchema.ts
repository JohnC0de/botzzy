import { z } from "zod";

export const channelSchema = z.object({
  id: z.string(),
  internal_name: z.string(),
  state: z
    .string()
    .transform((state) =>
      state === "RUNNING" ? "Ativo" : state === "PAUSED" ? "Pausado" : "Inativo"
    ),
  status_connection: z
    .string()
    .transform((status_connection) =>
      status_connection === "open" ? "Conectado" : "Desconectado"
    ),
  created_at: z
    .string()
    .transform((created_at) => new Date(created_at).toLocaleDateString()),
});
