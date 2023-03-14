import { useLoaderData, useNavigate } from "@remix-run/react";

import { Icons } from "~/client/icons";
import { useCrud, useScopedParams } from "~/client/hooks";
import {
  Card,
  Container,
  Table,
  Button,
  Header,
  Input,
  type TableCollumnsProps,
  Badge,
} from "~/client/components";

import { ModalForm, FilterDrawer, ModalDelete } from "../components";
import type { integrationProps, loaderReturnProps } from "../types";

export function View() {
  const loaderData = useLoaderData<loaderReturnProps>();

  const navigate = useNavigate();
  const { openFormModal, openDeleteModal, openFilterDrawer } = useCrud();
  const { getScopedSearch } = useScopedParams();

  function onChangeSearchInput(e?: string) {
    navigate(getScopedSearch({ search: e ? e : undefined }));
  }

  const columns: TableCollumnsProps<integrationProps> = [
    { showOrder: true, key: "name", title: "Nome" },
    {
      key: "status",
      title: "Status",
      render: ({ is_active }) => (
        <Badge variant={is_active === "Ativo" ? "success" : "danger"}>
          {is_active}
        </Badge>
      ),
    },

    { showOrder: true, key: "created_at", title: "Data de criação" },
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

          <Button
            variant="ghost"
            hoverVariant="primary"
            space={1}
            onClick={() =>
              navigate("/v1/protect/integrations/events/" + data.id)
            }
          >
            <Icons.FolderOpen size={20} />
          </Button>
        </Card>
      ),
    },
  ];

  return (
    <Container>
      <Header title="Integrações" subTitle="Home > Integrações" />

      <Table
        data={loaderData.integrations}
        columns={columns}
        content={
          <Card spacing={2} justify="space-between" style={{ flex: 1 }}>
            <Card>
              <Input
                space={2}
                placeholder="Buscar..."
                onChange={(e) => onChangeSearchInput(e.target.value)}
              />
            </Card>

            <Card spacing={1}>
              <Button space={2} onClick={() => openFilterDrawer()}>
                <Icons.Filter size={18} />
              </Button>
              <Button
                space={2}
                spacing={2}
                onClick={() => openFormModal({ title: "Adicionar integração" })}
              >
                <Icons.Plus size={18} />
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
