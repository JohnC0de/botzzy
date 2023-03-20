import { Button, Card, Input, Select } from "~/client/components";
import { useState } from "react";
import { Position } from "reactflow";
import type { NodeProps } from "reactflow";

import { NodePort } from "../../components/NodePort";
import { useFlow } from "../../hook/useFlow";

import { awaitNodeContainer } from "./styles.css";
import { Icons } from "~/client/icons";
import { globalStyles } from "~/client/styles";

type awaitProps = { time?: string; timeType?: string };
function DrawerContent({ data, id }: { data: awaitProps; id: string }) {
  const [time, setTime] = useState(data.time || "");
  const [timeType, setTimeType] = useState(data.timeType || "");
  const { setNodes, onCloseDrawer, deleteNodeById } = useFlow();

  function handleSubmitNode() {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) node.data = { ...node.data, time, timeType };
        return node;
      })
    );

    onCloseDrawer();
  }

  function handleDeleteNode() {
    deleteNodeById(id);
    onCloseDrawer();
  }

  const selectOptions = [
    { label: "Dias", value: "dias" },
    { label: "Horas", value: "horas" },
    { label: "Minutos", value: "minutos" },
    { label: "Segundos", value: "segundos" },
  ];

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card direction="column" space={6} spacing={4} style={{ width: "400px" }}>
        <Input
          label="Tempo:"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Quanto tempo deve ser esperado?"
        />
        <Select
          label="Medida:"
          defaultValue={selectOptions.find((item) => item.value === timeType)}
          options={selectOptions}
          onChange={(e: any) => setTimeType(e.value)}
          placeholder="Qual a medida de tempo?"
        />

        <Button onClick={handleSubmitNode}>Salvar</Button>
        <Button variant="ghost" onClick={handleDeleteNode}>
          Deletar
        </Button>
      </Card>
    </form>
  );
}

export function Await({ data, id }: NodeProps<awaitProps>) {
  const { onOpenDrawer } = useFlow();
  return (
    <>
      <NodePort type="target" position={Position.Top} />

      <div
        className={awaitNodeContainer}
        onDoubleClick={() =>
          onOpenDrawer({
            id,
            title: "Esperar - nó",
            children: <DrawerContent data={data} id={id} />,
          })
        }
      >
        <Card spacing={3} align="center">
          <Card
            space={2}
            radii="xs"
            style={{
              background: globalStyles.vars.colors.yellow[500],
              marginRight: "2rem",
            }}
          >
            <Icons.Clock size={30} color="#FFF" />
          </Card>

          <p>Aguardar</p>
          <Card
            space={3}
            radii="xs"
            style={{ background: globalStyles.vars.colors.yellow[50] }}
          >
            {data.time ? (
              data.time + " " + data.timeType
            ) : (
              <small style={{ flex: 1, textAlign: "center" }}>... </small>
            )}
          </Card>
        </Card>
      </div>
      <NodePort type="source" position={Position.Bottom} />
    </>
  );
}
