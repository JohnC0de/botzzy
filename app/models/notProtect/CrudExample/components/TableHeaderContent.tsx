import { Button, Card, Input } from "~/client/components";
import { Icons } from "~/client/icons";

export function TableHeaderContent() {
  return (
    <Card spacing={2} justify="space-between" style={{ flex: 1 }}>
      <Card>
        <Input variant="outline" space={2} placeholder="Search..." />
      </Card>

      <Card spacing={1}>
        <Button space={2}>
          <Icons.Filter size={20} />
        </Button>
        <Button space={2} spacing={2}>
          <Icons.Plus size={20} />
          Adicionar
        </Button>
      </Card>
    </Card>
  );
}
