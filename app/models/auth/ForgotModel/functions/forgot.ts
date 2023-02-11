import { json } from "@remix-run/node";
import { z } from "zod";
import { formControl } from "~/server/utils";

type formProps = z.infer<typeof schema>;
type signInProps = { formData: { [x: string]: any } };

const errorMessage = "Campo obrigatório";
const schema = z.object({
  email: z.string({ required_error: errorMessage }).min(1, errorMessage),
});

export async function forgot({ formData }: signInProps) {
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data, success });

  return { toast: { type: "success", message: "E-mail enviado com sucesso" } };
}
