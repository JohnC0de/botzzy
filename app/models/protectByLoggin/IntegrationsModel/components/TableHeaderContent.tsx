import { useNavigate } from "@remix-run/react";
import { Button, Card, Input } from "~/client/components";
import { useCrud, useScopedParams } from "~/client/hooks";
import { Icons } from "~/client/icons";

export function TableHeaderContent() {
  const navigate = useNavigate();
  const { openFormModal, openFilterDrawer } = useCrud();
  const { getScopedSearch } = useScopedParams();

  function onChangeSearchInput(e?: string) {
    navigate(getScopedSearch({ search: e ? e : undefined }));
  }

  return (
    <Card spacing={2} justify="space-between" style={{ flex: 1 }}>
      <Card>
        <Input
          variant="outline"
          space={2}
          placeholder="Search..."
          onChange={(e) => onChangeSearchInput(e.target.value)}
        />
      </Card>

      <Card spacing={1}>
        <Button space={2} onClick={() => openFilterDrawer()}>
          <Icons.Filter size={20} />
        </Button>
        <Button
          space={2}
          spacing={2}
          onClick={() => openFormModal({ title: "Adicionar integração" })}
        >
          <Icons.Plus size={20} />
          Adicionar
        </Button>
      </Card>
    </Card>
  );
}
