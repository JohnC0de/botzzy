import { json } from "@remix-run/node";
import type { z } from "zod";

import { api } from "~/server/api";
import { formControl } from "~/server/utils";

import { signIn } from "../../SignIn/functions";
import { signUpAffiliateForm } from "../../_schema/signUpAffiliateForm";

type formProps = z.infer<typeof signUpAffiliateForm>;
type signUpAffiliateProps = {
  request: Request;
  formData: { [x: string]: any };
};

export async function signUpAffiliate({
  request,
  formData,
}: signUpAffiliateProps) {
  const { data, success } = await formControl<formProps>(
    formData,
    signUpAffiliateForm
  );
  if (!success) return json({ error: data, success });

  const url = "/register-affiliate";
  const { data: signUpAffiliateData, error: signUpAffiliateError } =
    await api.POST<any>({
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

  if (signUpAffiliateError || !signUpAffiliateData)
    return json({
      error: { path: url, error: signUpAffiliateError },
      toast: { type: "error", message: signUpAffiliateError },
    });

  return signIn({ formData, request });
}
