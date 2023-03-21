import { useState } from "react";
import { Button, Card, Divider, Header, Table } from "~/client/components";
import { CreditCard } from "../components/CreditCard";
import { ModalBillingInformations } from "../components/ModalBillingInformations";

export function View() {
  const [modalBilling, setModalBilling] = useState(false);
  const onOpenModalBilling = () => setModalBilling(true);
  const onCloseModalBilling = () => setModalBilling(false);

  return (
    <Card direction="column" space={4} spacing={8}>
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
        data={[
          {
            id: 1,
            product: "Pacote premium",
            status: "Pendente",
            date: "15/2/2023",
            amount: "R$ 168,50",
          },
          {
            id: 2,
            product: "Assinatura do Business Board Pro",
            status: "Pago",
            date: "10/2/2023",
            amount: "R$ 56,80",
          },
          {
            id: 3,
            product: "Assinatura do Business Board Pro",
            status: "Pago",
            date: "10/1/2023",
            amount: "R$ 56,80",
          },
        ]}
        space={null}
        columns={[
          { title: "Produto", key: "product" },
          { title: "Status", key: "status" },
          { title: "Data", key: "date" },
          { title: "Valor", key: "amount" },
        ]}
      />

      <ModalBillingInformations
        isOpen={modalBilling}
        onClose={onCloseModalBilling}
      />
    </Card>
  );
}
