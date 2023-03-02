import { Icons } from "~/client/icons";
import { Badge, Card } from "~/client/components";
import { useCrud } from "~/client/hooks";
import { Container, Header, Table, TableButton } from "~/client/template";
import type { TableColumnProps } from "~/client/template/Table/types";

import {
  TableHeaderContent,
  ReferralCards,
  ModalForm,
  FilterDrawer,
  ModalDelete,
} from "../components";

type DataType = {
  id: string;
  name: string;
  email: string;
  status: 0 | 1;
};

export function View() {
  const { openDeleteModal, openFormModal } = useCrud();
  const data = [
    {
      id: "asd-456",
      name: "Lucas Gonçalves",
      email: "lucasedugoncalves123@gmail.com",
      status: 1,
    },
    {
      id: "asd-476",
      name: "Francisco Dias",
      email: "eng.franciscodias@gmail.com",
      status: 1,
    },
    {
      id: "ssd-476",
      name: "Wanderson Willer",
      email: "wandersonwiller@gmail.com",
      status: 0,
    },
  ];

  const columns: TableColumnProps<DataType>[] = [
    { showOrder: true, key: "name", title: "Nome" },
    { showOrder: true, key: "email", title: "Email" },
    {
      showOrder: true,
      key: "status",
      title: "Status",
      render: (data) => (
        <Badge variant={data.status ? "success" : "danger"}>
          {data.status ? "Ativo" : "Desativo"}
        </Badge>
      ),
    },
    {
      key: "action",
      title: "Ações",
      render: (data) => (
        <Card spacing={2}>
          <TableButton
            variant="danger"
            onClick={() => openDeleteModal(data.id)}
          >
            <Icons.Trash size={20} />
          </TableButton>
          <TableButton
            variant="warning"
            onClick={() => openFormModal({ title: "Editar integração", data })}
          >
            <Icons.Edit size={20} />
          </TableButton>
        </Card>
      ),
    },
  ];

  return (
    <Container>
      <Header title="Integrações" />
      <ReferralCards />
      <Table data={data} columns={columns} content={<TableHeaderContent />} />

      <FilterDrawer />
      <ModalForm />
      <ModalDelete />
    </Container>
  );
}
