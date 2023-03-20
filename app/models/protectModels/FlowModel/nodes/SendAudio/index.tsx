import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useState } from "react";
import { Position } from "reactflow";
import type { NodeProps } from "reactflow";

import { Button, Card } from "~/client/components";
import whatsLogo from "~/client/assets/whatsapp_logo.png";
import { Icons } from "~/client/icons";

import { NodePort } from "../../components/NodePort";
import { useFlow } from "../../hook/useFlow";

import {
  messageZone,
  audioNodeContainer,
  imageStyle,
  messageStyle,
  buttonAudioStyle,
} from "./styles.css";

type AudioProps = { url: string; blob: Blob };
type AudioStateProps = { url: string; blob: Blob } | null;

function DrawerContent({ data, id }: { data: AudioProps; id: string }) {
  const { setNodes, onCloseDrawer, deleteNodeById } = useFlow();
  const [audio, setAudio] = useState<AudioStateProps>(data || null);

  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setAudio({ url, blob });
  };

  function handleSubmitNode() {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) node.data = { ...node.data, ...audio };
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
        <Card
          align="center"
          justify={audio?.url ? undefined : "center"}
          spacing={2}
          showBgColor
        >
          <AudioRecorder
            classes={{ AudioRecorderClass: buttonAudioStyle }}
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
          />
          {audio?.url && (
            <>
              <audio style={{ height: "2.5rem" }} src={audio.url} controls />
              <Button
                variant="ghost"
                space={2}
                onClick={() => setAudio(null)}
                radii="full"
              >
                <Icons.X size={22} />
              </Button>
            </>
          )}
        </Card>
        <Button onClick={() => {}}>
          {audio ? "Trocar para arquivo interno" : "Enviar arquivo"}
        </Button>
        <Button onClick={handleSubmitNode}>Salvar</Button>
        <Button variant="ghost" onClick={handleDeleteNode}>
          Deletar
        </Button>
      </Card>
    </form>
  );
}

export function SendAudio({ data, id }: NodeProps<AudioProps>) {
  const { onOpenDrawer } = useFlow();
  return (
    <>
      <NodePort type="target" position={Position.Top} />

      <div
        className={audioNodeContainer}
        onDoubleClick={() =>
          onOpenDrawer({
            id,
            title: "Enviar audio - nó",
            children: <DrawerContent data={data} id={id} />,
          })
        }
      >
        <Card spacing={3} align="center">
          <img src={whatsLogo} alt="Logo do whatsapp" className={imageStyle} />

          <Card direction="column">
            <p>Enviar audio</p>
            <small>Suporte ao cliente (comum)</small>
          </Card>
        </Card>
        <div className={messageZone}>
          {data.url ? (
            <div className={messageStyle}>
              <audio
                style={{ height: "2.5rem", maxWidth: "200px" }}
                src={data.url}
                controls
              />
            </div>
          ) : (
            <small style={{ flex: 1, textAlign: "center" }}>
              Adicione um audio
            </small>
          )}
        </div>
      </div>
      <NodePort type="source" position={Position.Bottom} />
    </>
  );
}
