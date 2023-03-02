import { useLocation, useNavigate } from "@remix-run/react";
import { Button, Card, Drawer, Input } from "~/client/components";
import { useCrud, useScopedParams } from "~/client/hooks";

export function FilterDrawer() {
  const { filterDrawer, closeFilterDrawer } = useCrud();

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
        space={4}
        spacing={4}
        showBgColor
        style={{ width: 300 }}
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
