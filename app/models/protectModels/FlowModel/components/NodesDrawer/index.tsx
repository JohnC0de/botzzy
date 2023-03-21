import { useState } from "react";
import { Button, Drawer } from "~/client/components";
import { Icons } from "~/client/icons";
import { draggableNodeStyle, drawerContentStyle } from "./styles.css";

export function NodesDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <Drawer
        isVisible={isOpen}
        makeInvisible={() => setIsOpen(false)}
        title="Adicione um nó"
        showOverlay={false}
      >
        <menu className={drawerContentStyle}>
          <small>Whatsapp</small>
          <div
            draggable
            onDragStart={(event) => onDragStart(event, "send_message")}
            onDragEnd={() => setIsOpen(false)}
            className={draggableNodeStyle}
          >
            <Icons.MessageSquare size={22} /> Enviar mensagem
          </div>
          <div
            draggable
            onDragStart={(event) => onDragStart(event, "await")}
            onDragEnd={() => setIsOpen(false)}
            className={draggableNodeStyle}
          >
            <Icons.Clock size={22} /> Esperar ação
          </div>
          <div
            draggable
            onDragStart={(event) => onDragStart(event, "send_audio")}
            onDragEnd={() => setIsOpen(false)}
            className={draggableNodeStyle}
          >
            <Icons.Microphone size={22} /> Enviar audio
          </div>
          <div
            draggable
            onDragStart={(event) => onDragStart(event, "send_file")}
            onDragEnd={() => setIsOpen(false)}
            className={draggableNodeStyle}
          >
            <Icons.FileBlank size={22} /> Enviar arquivo
          </div>
          <div
            draggable
            onDragStart={(event) => onDragStart(event, "send_image")}
            onDragEnd={() => setIsOpen(false)}
            className={draggableNodeStyle}
          >
            <Icons.AddImage size={22} /> Enviar imagem
          </div>
        </menu>
      </Drawer>

      <Button
        title="Adicionar node"
        space={2}
        variant="ghost"
        onClick={() => setIsOpen(true)}
      >
        <Icons.Plus size={20} />
      </Button>
    </>
  );
}
