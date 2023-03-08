import { useState } from "react";
import { Button, Card, Divider } from "~/client/components";
import { Icons } from "~/client/icons";
import { CardModal } from "./CardModal";
import { Credit } from "./Credit";

export function CreditCard() {
  const [modalIsOpen, setModalIsOpen] = useState<any>(false);

  return (
    <Card align="start" spacing={8} wrap="wrap" justify="space-between">
      <label>
        <strong>Cartões de crédito</strong>
      </label>

      <Card direction="column" align="start" spacing={3} showBgColor>
        <Card
          direction="column"
          radii="xs"
          bordered="full"
          style={{ overflow: "hidden" }}
        >
          <Credit />
          <Divider />
          <Credit />
        </Card>
        <Button variant="ghost" onClick={() => setModalIsOpen(true)}>
          <Icons.Plus size={22} /> Adicionar novo
        </Button>
      </Card>

      <CardModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        initialValue={typeof modalIsOpen === "boolean" ? null : modalIsOpen}
      />
    </Card>
  );
}
