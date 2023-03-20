import { z } from "zod";

const errorMessage = "Campo obrigatório";

export const registeAffiliateSchema = z
  .object({
    name: z.string({ required_error: errorMessage }).min(1, errorMessage),
    email: z.string({ required_error: errorMessage }).min(1, errorMessage),
    whatsapp_contact: z
      .string({ required_error: errorMessage })
      .min(1, errorMessage),
    instagram: z.string({ required_error: errorMessage }).min(1, errorMessage),
    youtube: z.string({ required_error: errorMessage }).min(1, errorMessage),
    password: z.string({ required_error: errorMessage }).min(1, errorMessage),
    confirm_password: z
      .string({ required_error: errorMessage })
      .min(1, errorMessage),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Os campos devem ser iguais.",
  });
