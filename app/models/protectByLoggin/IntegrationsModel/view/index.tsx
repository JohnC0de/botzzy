import { useNavigate } from "@remix-run/react";

import { Icons } from "~/client/icons";
import { useCrud, useScopedParams } from "~/client/hooks";
import { globalStyles } from "~/client/styles";
import {
  Badge,
  Card,
  Container,
  Stats,
  Table,
  Button,
  Header,
  type TableCollumnsProps,
  Input,
} from "~/client/components";

import { ModalForm, FilterDrawer, ModalDelete } from "../components";

type DataType = {
  id: string;
  name: string;
  email: string;
  status: 0 | 1;
};

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

const { vars } = globalStyles;
export function View() {
  const navigate = useNavigate();
  const { openFormModal, openDeleteModal, openFilterDrawer } = useCrud();
  const { getScopedSearch } = useScopedParams();

  function onChangeSearchInput(e?: string) {
    navigate(getScopedSearch({ search: e ? e : undefined }));
  }

  const columns: TableCollumnsProps<DataType> = [
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
          <Button
            variant="ghost"
            hoverVariant="danger"
            space={1}
            onClick={() => openDeleteModal(data.id)}
          >
            <Icons.Trash size={20} />
          </Button>
          <Button
            variant="ghost"
            hoverVariant="warning"
            space={1}
            onClick={() => openFormModal({ title: "Editar integração", data })}
          >
            <Icons.Edit size={20} />
          </Button>
        </Card>
      ),
    },
  ];

  return (
    <Container>
      <Header title="Integrações" />
      <Card spacing={6} wrap="wrap">
        <Stats
          icon={Icons.History}
          iconBg={vars.colors.indigo[500]}
          title="Total users"
          content="2,420"
          badge={{ type: "input", content: "22.5%" }}
        />

        <Stats
          icon={Icons.Note}
          iconBg={vars.colors.emerald[500]}
          title="Active Users"
          content="2,420"
          badge={{ type: "input", content: "22.5%" }}
        />

        <Stats
          icon={Icons.History}
          iconBg={vars.colors.indigo[500]}
          title="New Users"
          content="241"
          badge={{ type: "output", content: "2.3%" }}
        />
      </Card>

      <Table
        data={data}
        columns={columns}
        content={
          <Card spacing={2} justify="space-between" style={{ flex: 1 }}>
            <Card>
              <Input
                variant="outline"
                space={2}
                placeholder="Search..."
                onChange={(e) => onChangeSearchInput(e.target.value)}
              />
            </Card>

            <Card spacing={1}>
              <Button space={2} onClick={() => openFilterDrawer()}>
                <Icons.Filter size={20} />
              </Button>
              <Button
                space={2}
                spacing={2}
                onClick={() => openFormModal({ title: "Adicionar integração" })}
              >
                <Icons.Plus size={20} />
                Adicionar
              </Button>
            </Card>
          </Card>
        }
      />
      <FilterDrawer />
      <ModalForm />
      <ModalDelete />
    </Container>
  );
}
