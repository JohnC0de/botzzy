import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import { Button, Card, Drawer, Input, Select } from "~/client/components";
import { useCrud, useScopedParams } from "~/client/hooks";
import type { loaderReturnProps } from "../types";

export function FilterDrawer() {
  const { filterDrawer, closeFilterDrawer } = useCrud();
  const { integrationTypes } = useLoaderData<loaderReturnProps>();

  const navigate = useNavigate();
  const location = useLocation();
  const { getScopedSearch } = useScopedParams();
  const existsAppliedFilters = location.search !== "";

  function handleApplyFilter(key: string, value: string) {
    navigate(getScopedSearch({ [key]: value }));
  }

  function handleClearFilters() {
    navigate("");
    closeFilterDrawer();
  }

  return (
    <Drawer
      isVisible={filterDrawer}
      makeInvisible={closeFilterDrawer}
      position="right"
      title="Filtrar"
    >
      <Card
        direction="column"
        space={8}
        spacing={6}
        showBgColor
        style={{ width: 350 }}
      >
        <Input
          label="Data inicial:"
          type="date"
          onChange={(e) => handleApplyFilter("startDate", e.target.value)}
        />

        <Input
          label="Data Final:"
          type="date"
          onChange={(e) => handleApplyFilter("endDate", e.target.value)}
        />

        <Select
          label="Plataforma:"
          onChange={(e: any) => handleApplyFilter("integration_type", e.value)}
          options={integrationTypes.map((item) => ({
            label: item.description || item.name,
            value: item.id,
          }))}
        />

        {existsAppliedFilters && (
          <>
            <Button onClick={closeFilterDrawer}>Concluir</Button>
            <Button variant="ghost" onClick={handleClearFilters}>
              Limpar filtros
            </Button>
          </>
        )}
      </Card>
    </Drawer>
  );
}
