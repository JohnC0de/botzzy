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
import { Icons } from "~/client/icons";

type AudioProps = { file: File };

function DrawerContent({ data, id }: { data: AudioProps; id: string }) {
  const { setNodes, onCloseDrawer, deleteNodeById } = useFlow();
  const [file, setFile] = useState<File | null>(data?.file || null);

  const inputId = useId();

  function handleSubmitNode() {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) node.data = { ...node.data, file };
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
        {file && (
          <>
            <p>
              <strong>Nome:</strong> {file.name}
            </p>
            <p>
              <strong>Tamanho:</strong> {file.size}B
            </p>
          </>
        )}
        <label className={labelButtonContainerStyle} htmlFor={inputId}>
          <Input
            type="file"
            id={inputId}
            style={{ display: "none" }}
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
          />
          {file ? "Trocar arquivo" : "Escolher um arquivo"}
        </label>

        <Button onClick={handleSubmitNode}>Salvar</Button>
        <Button variant="ghost" onClick={handleDeleteNode}>
          Deletar
        </Button>
      </Card>
    </form>
  );
}

export function SendFile({ data, id }: NodeProps<AudioProps>) {
  const { onOpenDrawer } = useFlow();
  return (
    <>
      <NodePort type="target" position={Position.Top} />

      <div
        className={audioNodeContainer}
        onDoubleClick={() =>
          onOpenDrawer({
            id,
            title: "Enviar arquivo - nó",
            children: <DrawerContent data={data} id={id} />,
          })
        }
      >
        <Card spacing={3} align="center">
          <img src={whatsLogo} alt="Logo do whatsapp" className={imageStyle} />

          <Card direction="column">
            <p>Enviar arquivo</p>
            <small>Suporte ao cliente (comum)</small>
          </Card>
        </Card>
        <div className={messageZone}>
          {data.file ? (
            <div className={messageStyle}>
              <Card direction="row" align="center" spacing={2}>
                <Icons.FileBlank size={40} />
                <Card direction="column" spacing={1}>
                  <div
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      maxWidth: "12rem",
                    }}
                  >
                    {data.file.name}
                  </div>
                  <small>{data.file.size}B</small>
                </Card>
              </Card>
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
