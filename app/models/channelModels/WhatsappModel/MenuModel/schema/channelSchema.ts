import { z } from "zod";

export const channelSchema = z.object({
  id: z.string(),
  internal_name: z.string(),
  container_id: z.string(),
  api_docs_url: z.string(),
  auto_read_messages: z.number(),
  create_at: z.string(),
  json_docs: z.string(),
  license_key: z.string(),
  name: z.string(),
  payment_status: z.string(),
  postman_api_docs_url: z.string(),
  qrcode: z.string().nullable(),
  reject_call: z.number(),
  reject_call_message: z.string().nullable(),
  trial_ends_at: z.string(),
  updated_at: z.string(),
  webhook_events: z.string(),
  webhook_url: z.string().nullable(),
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
