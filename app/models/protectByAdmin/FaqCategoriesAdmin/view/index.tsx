import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import type { loaderReturnDTO } from "../types/loaderReturnDTO";

import { useToast } from "~/client/hooks";
import { Header } from "~/client/template";
import { Button } from "~/client/components";

export function View() {
  const { fireToast } = useToast();
  const { faqCategories, toast } = useLoaderData<loaderReturnDTO>();

  useEffect(() => {
    if (toast) fireToast(toast);
  }, [toast]);

  return (
    <>
      <Header title="Faq's (ADMIN)" content={<Button>Adicionar FAQ</Button>} />
    </>
  );
}
