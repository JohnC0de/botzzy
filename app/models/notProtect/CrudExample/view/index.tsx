import type { TableColumnProps } from "~/client/template/Table/types";

import { Icons } from "~/client/icons";
import { Card } from "~/client/components";
import { Container, Header, Table, TableButton } from "~/client/template";

import { HeaderContent } from "../components/HeaderContent";

export function View() {
  const data = [
    {
      id: "asdasdas",
      title1: "OrderCollumn",
      title2: "ErrorBadge",
      title3: "SuccessBadge",
      title4: "WarningBadge",
      title5: "InfoBadge",
    },
    {
      id: "asdasdasdaas",
      title1: "OrderCollumn",
      title2: "ErrorBadge",
      title3: "SuccessBadge",
      title4: "WarningBadge",
      title5: "InfoBadge",
    },
  ];

  const columns: TableColumnProps<any>[] = [
    { key: "title1", title: "COLLUMN-1", showOrder: true },
    { key: "title2", title: "COLLUMN-2", showBadge: "danger" },
    { key: "title3", title: "COLLUMN-3", showBadge: "success" },
    { key: "title4", title: "COLLUMN-4", showBadge: "warning" },
    { key: "title5", title: "COLLUMN-5", showBadge: "info" },
    {
      key: "action",
      title: "COLLUMN-6",
      render: () => (
        <Card spacing={2}>
          <TableButton variant="danger">
            <Icons.Trash size={20} />
          </TableButton>
          <TableButton variant="warning">
            <Icons.Edit size={20} />
          </TableButton>
          <TableButton variant="primary">
            <Icons.AlertCircle size={21} />
          </TableButton>
          <TableButton variant="success">
            <Icons.CheckCircle size={21} />
          </TableButton>
          <TableButton variant="info">
            <Icons.DoubtCircle size={21} />
          </TableButton>
        </Card>
      ),
    },
  ];

  return (
    <Container>
      <Header
        title="Teste"
        subTitle="Test screen description"
        content={<HeaderContent />}
      />

      <Table data={data} columns={columns} />
    </Container>
  );
}
