import type { z } from "zod";
import type { salesSchema } from "./schemas";

export type salesProps = z.infer<typeof salesSchema>;

export type loaderReturnProps = {
  sales: salesProps[];
  totalSales: string;
  totalComission: string;
  toast: { message: string; type: "error" };
};
