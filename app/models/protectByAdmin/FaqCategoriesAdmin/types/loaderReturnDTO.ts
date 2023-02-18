import type { faqCategoryProps } from "./faqCategoryProps";

export type loaderReturnDTO = {
  faqCategories: { responseData: faqCategoryProps[]; count: number };
  toast: null | { message: string; type: "error" };
};
