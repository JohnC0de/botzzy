import { json } from "@remix-run/node";
import type { z } from "zod";
import { api } from "~/server/api";

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

  const url = "/register-affiliate";
  const apiResponse = await api.POST<any>({
    url,
    data: {
      name: data.name,
      email: data.email,
      whatsapp_contact: data.whatsapp_contact,
      instagram: data.instagram,
      youtube: data.youtube,
      password: data.password,
    },
  });
  console.log(apiResponse);
  return null;
}
