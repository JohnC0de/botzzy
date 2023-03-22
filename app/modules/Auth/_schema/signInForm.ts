import { z } from "zod";

export const signInForm = z.object({
  email: z
    .string({ required_error: "Campo obrigatório." })
    .min(1, "Campo obrigatório."),
  password: z
    .string({ required_error: "Campo obrigatório." })
    .min(1, "Campo obrigatório."),
});
