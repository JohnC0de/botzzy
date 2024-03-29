import whatsLogo from "~/client/assets/whatsapp_logo.png";
import { Button, Card, Textarea } from "~/client/components";
import { useState } from "react";
import { Position } from "reactflow";
import type { NodeProps } from "reactflow";

import { NodePort } from "../../components/NodePort";
import { useFlow } from "../../hook/useFlow";

import {
  messageZone,
  sendMessageNodeContainer,
  imageStyle,
  messageStyle,
} from "./styles.css";

type SendMessageProps = { message?: string };
function DrawerContent({ data, id }: { data: SendMessageProps; id: string }) {
  const [message, setMessage] = useState(data.message || "");
  const { setNodes, onCloseDrawer, deleteNodeById } = useFlow();

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

  function handleDeleteNode() {
    deleteNodeById(id);
    onCloseDrawer();
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card direction="column" space={6} spacing={4} style={{ width: "400px" }}>
        <Textarea
          label="Mensagem:"
          placeholder="Adicione sua mensagem aqui..."
          value={message}
          rows={8}
          showEmoticons
          onChange={(e) => setMessage(e)}
        />

        <Button onClick={handleSubmitNode}>Salvar</Button>
        <Button variant="ghost" onClick={handleDeleteNode}>
          Deletar
        </Button>
      </Card>
    </form>
  );
}

export function SendMessage({ data, id }: NodeProps<SendMessageProps>) {
  const { onOpenDrawer } = useFlow();

  const message = data.message?.substring(0, 300);

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
          {message ? (
            <div
              className={messageStyle}
              dangerouslySetInnerHTML={{
                __html: message.replaceAll("\n", "<br />"),
              }}
            />
          ) : (
            <small style={{ flex: 1, textAlign: "center" }}>
              Adicione uma mensagem...
            </small>
          )}
        </div>
      </div>
      <NodePort type="source" position={Position.Bottom} />
    </>
  );
}
