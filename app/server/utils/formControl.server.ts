import type { z } from "zod";

export async function formControl<T = unknown>(
  starter: { [k: string]: any },
  schema: z.ZodObject<any>
) {
  const zodResponse = schema.safeParse(starter);

  if (!zodResponse.success) {
    const errorsArray = Object.entries(
      zodResponse.error.formErrors.fieldErrors
    );
    const errorsObject = Object.fromEntries(
      errorsArray.map((item) => [item[0], item[1]?.[0] || "Error"])
    );

    return { success: zodResponse.success, data: errorsObject };
  } else {
    return { success: zodResponse.success, data: zodResponse.data as T };
  }
}
