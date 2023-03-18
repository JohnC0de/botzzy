import { json } from "@remix-run/node";
import type { z } from "zod";

import { formControl } from "~/server/utils";
import { registeAffiliateSchema } from "../schema/registerAffiliateSchema";

type formProps = z.infer<typeof registeAffiliateSchema>;
type signInProps = { request: Request; formData: { [x: string]: any } };

export async function signUpAffiliate({ request, formData }: signInProps) {
  const { data, success } = await formControl<formProps>(
    formData,
    registeAffiliateSchema
  );
  if (!success) return json({ error: data, success });
}
