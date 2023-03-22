import { z } from "zod";

export const signUpForm = z
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
