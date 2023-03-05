import uuid from "react-uuid";
import type { DragEvent, RefObject } from "react";
import type { ReactFlowInstance, Node } from "reactflow";

type onDropProps = {
  event: DragEvent<HTMLDivElement>;
  reactFlowWrapperRef?: RefObject<HTMLDivElement>;
  reactFlowInstance?: ReactFlowInstance<any, any> | null;
  setNodes: (
    value: React.SetStateAction<Node<{ label: string }, string | undefined>[]>
  ) => void;
};

export function onDrop({
  event,
  reactFlowInstance,
  reactFlowWrapperRef,
  setNodes,
}: onDropProps) {
  event.preventDefault();
  if (!reactFlowWrapperRef?.current || !reactFlowInstance) return;

  const reactFlowBounds = reactFlowWrapperRef.current.getBoundingClientRect();
  const type = event.dataTransfer.getData("application/reactflow");

  if (typeof type === "undefined" || !type) return;

  const position = reactFlowInstance.project({
    x: event.clientX - reactFlowBounds.left,
    y: event.clientY - reactFlowBounds.top,
  });

  const newNode: Node = {
    id: uuid(),
    type,
    position,
    data: { label: `${type} node` },
  };

  setNodes((nds) => nds.concat(newNode));
}
