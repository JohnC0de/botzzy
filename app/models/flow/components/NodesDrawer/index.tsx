import { useState } from "react";
import { BiMessageSquareDetail, BiMicrophone } from "react-icons/bi";

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
            onDragStart={(event) => onDragStart(event, "submit-message")}
            onDragEnd={() => setIsOpen(false)}
            className={draggableNodeStyle}
          >
            <BiMessageSquareDetail size={22} /> Enviar mensagem
          </div>
          <div
            draggable
            onDragStart={(event) => onDragStart(event, "submit-audio")}
            onDragEnd={() => setIsOpen(false)}
            className={draggableNodeStyle}
          >
            <BiMicrophone size={22} /> Enviar Audio
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
