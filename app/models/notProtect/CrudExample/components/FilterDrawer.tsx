import { useLocation, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { Button, Card, Drawer, Input } from "~/client/components";
import { useScopedParams } from "~/client/hooks";
import { Icons } from "~/client/icons";

export function FilterDrawer() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const onVisible = () => setDrawerIsOpen(true);
  const onInvisible = () => setDrawerIsOpen(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { getScopedSearch } = useScopedParams();
  const existsAppliedFilters = location.search !== "";

  function handleApplyFilter(key: string, value: string) {
    navigate(getScopedSearch({ [key]: value }));
  }

  function handleClearFilters() {
    navigate("");
    onInvisible();
  }

  return (
    <>
      <Button space={2} onClick={onVisible}>
        <Icons.Filter size={20} />
      </Button>

      <Drawer
        isVisible={drawerIsOpen}
        makeInvisible={onInvisible}
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
              <Button onClick={onInvisible}>Concluir</Button>
              <Button variant="ghost" onClick={handleClearFilters}>
                Limpar filtros
              </Button>
            </>
          )}
        </Card>
      </Drawer>
    </>
  );
}
