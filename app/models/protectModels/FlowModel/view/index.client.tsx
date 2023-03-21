import ReactFlow, { Background } from "reactflow";
import { useCallback } from "react";
import { globalStyles } from "~/client/styles";

import type { NodeTypes } from "reactflow";
import type { DragEvent } from "react";

import { onDrop } from "../functions/onDrop";
import { useFlow } from "../hook/useFlow";
import { FloatingInteractionArea } from "../components/FloatingInteractionArea";
import { FloatingSaveArea } from "../components/FloatingSaveArea";
import { viewContainer } from "./styles.css";

import { Await } from "../nodes/Await";
import { SendMessage } from "../nodes/SendMessage";
import { SendAudio } from "../nodes/SendAudio";
import { InitialNode } from "../nodes/InitialNode";
import { SendFile } from "../nodes/SendFile";
import { SendImage } from "../nodes/SendImage";

const nodeTypes: NodeTypes = {
  send_message: SendMessage,
  await: Await,
  send_audio: SendAudio,
  send_file: SendFile,
  initial_node: InitialNode,
  send_image: SendImage,
};

export function View() {
  const {
    edges,
    nodes,
    onConnect,
    onDragOver,
    onEdgesChange,
    onNodesChange,
    reactFlowInstance,
    reactFlowWrapperRef,
    setNodes,
    setReactFlowInstance,
  } = useFlow();

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      onDrop({ event, setNodes, reactFlowInstance, reactFlowWrapperRef });
    },
    [reactFlowInstance, reactFlowWrapperRef, setNodes]
  );

  return (
    <main className={viewContainer}>
      <FloatingSaveArea />
      <FloatingInteractionArea />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        ref={reactFlowWrapperRef}
        onInit={setReactFlowInstance}
        onNodesChange={onNodesChange}
        fitView
        fitViewOptions={{ maxZoom: 1 }}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onDragOver={onDragOver}
        onDrop={handleDrop}
      >
        <Background gap={20} color={globalStyles.vars.colors.text[100]} />
      </ReactFlow>
    </main>
  );
}
