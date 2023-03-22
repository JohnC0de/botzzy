import { z } from "zod";

export const signUpAffiliateForm = z
  .object({
    name: z
      .string({ required_error: "Campo obrigatório." })
      .min(1, "Campo obrigatório."),
    email: z
      .string({ required_error: "Campo obrigatório." })
      .min(1, "Campo obrigatório."),
    whatsapp_contact: z
      .string({ required_error: "Campo obrigatório." })
      .min(1, "Campo obrigatório."),
    instagram: z
      .string({ required_error: "Campo obrigatório." })
      .min(1, "Campo obrigatório.")
      .optional(),
    youtube: z
      .string({ required_error: "Campo obrigatório." })
      .min(1, "Campo obrigatório.")
      .optional(),
    password: z
      .string({ required_error: "Campo obrigatório." })
      .min(1, "Campo obrigatório."),
    confirm_password: z
      .string({ required_error: "Campo obrigatório." })
      .min(1, "Campo obrigatório."),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Os campos devem ser iguais.",
  });
