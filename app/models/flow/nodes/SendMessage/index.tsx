import { Button, Card, Textarea } from "~/client/components";
import { Position } from "reactflow";
import whatsLogo from "~/client/assets/whatsapp_logo.png";

import type { NodeProps } from "reactflow";
import { NodePort } from "../../components/NodePort";
import {
  messageZone,
  sendMessageNodeContainer,
  imageStyle,
} from "./styles.css";
import { useFlow } from "../../hook/useFlow";
import { useState } from "react";

type SendMessageProps = {
  message?: string;
};

function DrawerContent({ data, id }: { data: SendMessageProps; id: string }) {
  const [message, setMessage] = useState(data.message || "");
  const { setNodes, onCloseDrawer } = useFlow();

  function handleSubmitNode() {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id)
          node.data = {
            ...node.data,
            message: message,
          };

        return node;
      })
    );

    onCloseDrawer();
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card direction="column" space={3} spacing={4} style={{ width: "300px" }}>
        <Textarea
          label="Mensagem:"
          placeholder="Adicione sua mensagem aqui..."
          value={message}
          rows={8}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button onClick={handleSubmitNode}>Salvar</Button>
      </Card>
    </form>
  );
}

export function SendMessage({ data, id }: NodeProps<SendMessageProps>) {
  const { onOpenDrawer } = useFlow();

  return (
    <>
      <NodePort type="target" position={Position.Top} />

      <div
        className={sendMessageNodeContainer}
        onDoubleClick={() =>
          onOpenDrawer({
            id,
            title: "Enviar mensagem - nó",
            children: <DrawerContent data={data} id={id} />,
          })
        }
      >
        <Card spacing={3} align="center">
          <img src={whatsLogo} alt="Logo do whatsapp" className={imageStyle} />

          <Card direction="column">
            <p>Enviar uma mensagem</p>
            <small>Suporte ao cliente (comum)</small>
          </Card>
        </Card>

        <div className={messageZone}>
          {data.message ? (
            data.message
          ) : (
            <small>Adicione uma mensagem...</small>
          )}
        </div>
      </div>

      <NodePort type="source" position={Position.Bottom} />
    </>
  );
}
