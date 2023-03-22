import { json } from "@remix-run/node";
import type { z } from "zod";

import { api } from "~/server/api";
import { formControl } from "~/server/utils";

import { signUpForm } from "../../_schema/signUpForm";
import { signIn } from "../../SignIn/functions";

type formProps = z.infer<typeof signUpForm>;
type signUpProps = { request: Request; formData: { [x: string]: any } };

export async function signUp({ request, formData }: signUpProps) {
  const { data, success } = await formControl<formProps>(formData, signUpForm);
  if (!success) return json({ error: data, success });

  const url = "/register";
  const { data: signUpData, error: signUpError } = await api.POST<any>({
    url,
    data: {
      name: data.name,
      email: data.email,
      whatsapp_contact: data.whatsapp_contact,
      password: data.password,
    },
  });

  if (signUpError || !signUpData)
    return json({
      error: { path: url, error: signUpError },
      toast: { type: "error", message: signUpError },
    });

  return signIn({ formData, request });
}
