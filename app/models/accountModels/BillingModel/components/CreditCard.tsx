import { useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { Button, Card, Divider } from "~/client/components";
import { Icons } from "~/client/icons";
import type { OutletContextProps } from "../../AccountModel";
import { CardModal } from "./CardModal";
import { Credit } from "./Credit";

export function CreditCard() {
  const [modalIsOpen, setModalIsOpen] = useState<any>(false);
  const { cards } = useOutletContext<OutletContextProps>();

  return (
    <Card align="start" spacing={8} wrap="wrap" justify="space-between">
      <label style={{ flex: 1 }}>
        <strong>Cartões de crédito</strong>
      </label>

      <Card direction="column" spacing={3} showBgColor style={{ flex: 2 }}>
        <Card
          direction="column"
          radii="xs"
          bordered="full"
          style={{ flex: 2, overflow: "hidden" }}
        >
          {cards.map((card, index) => (
            <Card direction="column" key={card.id}>
              <Credit {...card} />
              {index + 1 < cards.length && <Divider />}
            </Card>
          ))}
        </Card>
        <Button
          variant="ghost"
          style={{ marginRight: "auto" }}
          onClick={() => setModalIsOpen(true)}
        >
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
