import whatsLogo from "~/client/assets/whatsapp_logo.png";
import { Button, Card, Input } from "~/client/components";
import { useState } from "react";
import { Position } from "reactflow";
import type { NodeProps } from "reactflow";

import { NodePort } from "../../components/NodePort";
import { useFlow } from "../../hook/useFlow";

import {
  messageZone,
  awaitNodeContainer,
  imageStyle,
  messageStyle,
} from "./styles.css";
import { Icons } from "~/client/icons";

type awaitProps = { time?: string; timeType?: string };
function DrawerContent({ data, id }: { data: awaitProps; id: string }) {
  const [time, setTime] = useState(data.time || "");
  const [timeType, setTimeType] = useState(data.timeType || "");
  const { setNodes, onCloseDrawer } = useFlow();

  function handleSubmitNode() {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) node.data = { ...node.data, time, timeType };
        return node;
      })
    );

    onCloseDrawer();
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card direction="column" space={6} spacing={4} style={{ width: "400px" }}>
        <Input
          label="Tempo:"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Quanto tempo deve ser esperado?"
        />
        <Input
          label="Medida:"
          value={timeType}
          onChange={(e) => setTimeType(e.target.value)}
          placeholder="Qual a medida de tempo?"
        />

        <Button onClick={handleSubmitNode}>Salvar</Button>
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
          <img src={whatsLogo} alt="Logo do whatsapp" className={imageStyle} />

          <Card direction="column">
            <p>Esperar</p>
            <small>Esperar ação (comum)</small>
          </Card>
        </Card>
        <div className={messageZone}>
          {data.time ? (
            <div className={messageStyle}>
              <Icons.Clock size={20} />
              <span
                dangerouslySetInnerHTML={{
                  __html: data.time + " " + data.timeType,
                }}
              />
            </div>
          ) : (
            <small style={{ flex: 1, textAlign: "center" }}>
              Adicione um tempo
            </small>
          )}
        </div>
      </div>
      <NodePort type="source" position={Position.Bottom} />
    </>
  );
}
