import { Card, Divider, Header, Table } from "~/client/components";
import { CreditCard } from "../components/CreditCard";

export function View() {
  return (
    <Card direction="column" space={4} spacing={8}>
      <Header
        title="Forma de pagamentos"
        subTitle="Você pode atualizar as informações dos seus cartões aqui."
        titleFontSize="lg"
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
            product: "Pacote premium",
            status: "Pendente",
            date: "15/2/2023",
            amount: "R$ 168,50",
          },
          {
            product: "Assinatura do Business Board Pro",
            status: "Pago",
            date: "10/2/2023",
            amount: "R$ 56,80",
          },
          {
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
    </Card>
  );
}
