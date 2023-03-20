import { useLoaderData, useNavigate } from "@remix-run/react";

import { Icons } from "~/client/icons";
import { useCrud, useScopedParams } from "~/client/hooks";
import {
  Card,
  Container,
  Table,
  Button,
  Header,
  Input,
  type TableCollumnsProps,
} from "~/client/components";

import { FilterDrawer } from "../components";
import { EmptyView } from "./EmptyView";
import { ErrorView } from "./ErrorView";
import type { salesProps, loaderReturnProps } from "../types";

export function View() {
  const loaderData = useLoaderData<loaderReturnProps>();

  const navigate = useNavigate();
  const { openFilterDrawer } = useCrud();
  const { getScopedSearch } = useScopedParams();

  function onChangeSearchInput(e?: string) {
    navigate(getScopedSearch({ search: e ? e : undefined }));
  }

  const columns: TableCollumnsProps<salesProps> = [
    { key: "name", title: "Nome" },
    { key: "amount", title: "Quantia" },
    { key: "comission", title: "Comissão" },
    { key: "created_at", title: "Data de pagamento" },
  ];

  return (
    <Container>
      {loaderData.sales.length > 0 && (
        <>
          <Header
            title={`Vendas`}
            subTitle="Home > Afiliado > Vendas"
            content={
              <Button
                space={2}
                spacing={1}
                variant="outline"
                onClick={() => navigate("/v1/protect/integrations")}
              >
                <Icons.ChevronLeft size={16} /> Voltar
              </Button>
            }
          />

          <Table
            data={loaderData.sales}
            columns={columns}
            content={
              <Card spacing={2} justify="space-between" style={{ flex: 1 }}>
                <Card>
                  <Input
                    space={2}
                    placeholder="Buscar..."
                    onChange={(e) => onChangeSearchInput(e.target.value)}
                  />
                </Card>

                <Button space={2} onClick={() => openFilterDrawer()}>
                  <Icons.Filter size={18} />
                </Button>
              </Card>
            }
          />
          <FilterDrawer />
        </>
      )}

      {loaderData.sales.length === 0 && loaderData.toast && <ErrorView />}
      {loaderData.sales.length === 0 && !loaderData.toast && <EmptyView />}
    </Container>
  );
}
