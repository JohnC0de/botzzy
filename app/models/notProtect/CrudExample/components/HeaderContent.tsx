import { Button, Card, Input } from "~/client/components";
import { Icons } from "~/client/icons";

export function HeaderContent() {
  return (
    <Card spacing={2}>
      <Input variant="outline" space={2} placeholder="Search..." />
      <Button space={2}>
        <Icons.Filter size={20} />
      </Button>
      <Button space={2} spacing={2}>
        <Icons.Plus size={20} />
        Adicionar
      </Button>
    </Card>
  );
}
