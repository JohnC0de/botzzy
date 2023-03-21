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
import type { eventProps, loaderReturnProps } from "../types";
import { EmptyView } from "./EmptyView";
import { ErrorView } from "./ErrorView";

export function View() {
  const loaderData = useLoaderData<loaderReturnProps>();

  const navigate = useNavigate();
  const { openFormModal, openDeleteModal, openFilterDrawer } = useCrud();
  const { getScopedSearch } = useScopedParams();

  function onChangeSearchInput(e?: string) {
    navigate(getScopedSearch({ search: e ? e : undefined }));
  }

  const columns: TableCollumnsProps<eventProps> = [
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
    {
      key: "verified",
      title: "Verificado",
      render: ({ test_status }) => (
        <Badge variant={test_status === "Testado" ? "success" : "danger"}>
          {test_status}
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
            onClick={() => openFormModal({ title: "Editar evento", data })}
          >
            <Icons.Edit size={20} />
          </Button>

          <Button
            variant="ghost"
            hoverVariant="primary"
            space={1}
            onClick={() => navigate("/v1/protect/flow/" + data.flow_id)}
          >
            <Icons.Branch size={20} />
          </Button>
        </Card>
      ),
    },
  ];

  return (
    <Container>
      {loaderData.events.length > 0 && (
        <>
          <Header
            title={`Eventos - ${loaderData.integration.name}`}
            subTitle="Home > Integrações > Eventos"
            content={
              <Button
                space={2}
                spacing={1}
                variant="outline"
                onClick={() => navigate("/v1/protect/integrations")}
              >
                <Icons.ChevronLeft size={16} /> Voltar
              </Button>
            }
          />

          <Table
            data={loaderData.events}
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
                    onClick={() => openFormModal({ title: "Adicionar evento" })}
                  >
                    <Icons.Plus size={18} />
                    Adicionar
                  </Button>
                </Card>
              </Card>
            }
          />
          <FilterDrawer />
          <ModalDelete />
        </>
      )}

      {loaderData.events.length === 0 && loaderData.toast && <ErrorView />}
      {loaderData.events.length === 0 && !loaderData.toast && <EmptyView />}
      <ModalForm />
    </Container>
  );
}
