import { Button, Card } from "~/client/components";

export function View() {
  return (
    <Card space={4} spacing={4} direction="column">
      <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
        <Button>Default button</Button>
        <Button variant="outline">Outline button</Button>
        <Button variant="ghost">Ghost button</Button>
      </Card>
      <Card space={4} radii="xs" showBgColor boxShadow="xs">
        opa
      </Card>
    </Card>
  );
}
