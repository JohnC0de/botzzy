import { useOutletContext } from "@remix-run/react";
import { useState } from "react";

import { Button, Divider, Header, Table } from "~/client/components";
import { CreditCard } from "../components/CreditCard";
import { ModalBillingInformations } from "../components/ModalBillingInformations";
import type { OutletContextProps } from "../../Base";

export function View() {
  const { payments } = useOutletContext<OutletContextProps>();
  const [modalBilling, setModalBilling] = useState(false);
  const onOpenModalBilling = () => setModalBilling(true);
  const onCloseModalBilling = () => setModalBilling(false);

  return (
    <>
      <Header
        title="Forma de pagamentos"
        subTitle="Você pode atualizar as informações dos seus cartões aqui."
        titleFontSize="lg"
        content={
          <Button onClick={onOpenModalBilling}>
            Editar informações para cobrança
          </Button>
        }
      />

      <CreditCard />
      <Divider />

      <Header
        title="Historíco de pagamentos"
        subTitle="Veja seus faturamentos anterioriores."
        titleFontSize="lg"
      />

      <Table
        data={payments}
        space={null}
        columns={[
          { title: "Produto", key: "name" },
          { title: "Descrição", key: "description" },
          { title: "Data", key: "created_at" },
          { title: "Valor", key: "amount" },
        ]}
      />

      <ModalBillingInformations
        isOpen={modalBilling}
        onClose={onCloseModalBilling}
      />
    </>
  );
}
