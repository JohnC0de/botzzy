import { useId, useState } from "react";
import { Position } from "reactflow";
import type { NodeProps } from "reactflow";

import { Button, Card, Input } from "~/client/components";
import whatsLogo from "~/client/assets/whatsapp_logo.png";

import { NodePort } from "../../components/NodePort";
import { useFlow } from "../../hook/useFlow";

import {
  messageZone,
  audioNodeContainer,
  imageStyle,
  messageStyle,
  labelButtonContainerStyle,
} from "./styles.css";

type ImageProps = { image: { url: string; file: File } };

function DrawerContent({ data, id }: { data: ImageProps; id: string }) {
  const { setNodes, onCloseDrawer, deleteNodeById } = useFlow();
  const [image, setImage] = useState<ImageProps["image"] | null>(
    data.image || null
  );

  const inputId = useId();
  function onChange(file: File) {
    const url = URL.createObjectURL(file);
    setImage({ url, file });
  }

  function handleSubmitNode() {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) node.data = { ...node.data, image };
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
        {image && (
          <img
            src={image.url}
            alt="uma imagem a ser enviada"
            style={{ maxWidth: "400px", borderRadius: "4px" }}
          />
        )}
        <label className={labelButtonContainerStyle} htmlFor={inputId}>
          <Input
            type="file"
            id={inputId}
            style={{ display: "none" }}
            onChange={(e) => e.target.files && onChange(e.target.files[0])}
          />
          {image ? "Trocar imagem" : "Escolher uma imagem"}
        </label>

        <Button onClick={handleSubmitNode}>Salvar</Button>
        <Button variant="ghost" onClick={handleDeleteNode}>
          Deletar
        </Button>
      </Card>
    </form>
  );
}

export function SendImage({ data, id }: NodeProps<ImageProps>) {
  const { onOpenDrawer } = useFlow();
  return (
    <>
      <NodePort type="target" position={Position.Top} />

      <div
        className={audioNodeContainer}
        onDoubleClick={() =>
          onOpenDrawer({
            id,
            title: "Enviar imagem - nó",
            children: <DrawerContent data={data} id={id} />,
          })
        }
      >
        <Card spacing={3} align="center">
          <img src={whatsLogo} alt="Logo do whatsapp" className={imageStyle} />

          <Card direction="column">
            <p>Enviar imagem</p>
            <small>Suporte ao cliente (comum)</small>
          </Card>
        </Card>
        <div className={messageZone}>
          {data.image ? (
            <div className={messageStyle}>
              <img
                src={data.image.url}
                alt="Uma imagem a ser enviada"
                style={{ maxWidth: "240px", borderRadius: "4px" }}
              />
            </div>
          ) : (
            <small style={{ flex: 1, textAlign: "center" }}>
              Adicione um arquivo
            </small>
          )}
        </div>
      </div>
      <NodePort type="source" position={Position.Bottom} />
    </>
  );
}
