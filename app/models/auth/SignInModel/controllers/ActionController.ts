import { json } from "@remix-run/node";
import { z } from "zod";
import { formControl } from "~/server/utils";

type ActionControllerProps = { request: Request };

type formProps = z.infer<typeof schema>;
const schema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export async function ActionController({ request }: ActionControllerProps) {
  const formData = await request.formData();
  const { data, success } = await formControl<formProps>(formData, schema);
  if (!success) return json({ error: data });
  return json({});
}
