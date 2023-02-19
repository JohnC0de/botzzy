import { useCallback } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
} from "reactflow";
import type { OnConnect } from "reactflow";
import { buttonAddNodeArea, viewContainer } from "./styles.css";
import { globalStyles } from "~/client/styles";
import { Button, Card } from "~/client/components";
import { Icons } from "~/client/icons";

const initialEdges = [
  {
    id: "e1-2",
    animated: true,
    style: { stroke: globalStyles.vars.colors.text[500] },
    source: "1",
    target: "2",
  },
];
const initialNodes = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
  { id: "2", position: { x: 100, y: 200 }, data: { label: "2" } },
];

export function View() {
  const { zoomIn, zoomOut } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: globalStyles.vars.colors.text[500] },
          },
          eds
        )
      ),
    [setEdges]
  );

  return (
    <main className={viewContainer}>
      <div className={buttonAddNodeArea}>
        <Card
          boxShadow="xs"
          radii="xs"
          direction="column"
          showBgColor
          space={2}
          spacing={1}
        >
          <Button title="Adicionar node" space={2} variant="ghost">
            <Icons.Plus size={20} />
          </Button>

          <Button
            title="Aproximar"
            onClick={() => zoomIn({ duration: 200 })}
            space={2}
            variant="ghost"
          >
            <Icons.ZoomIn size={20} />
          </Button>
          <Button
            onClick={() => zoomOut({ duration: 200 })}
            title="Afastar"
            space={2}
            variant="ghost"
          >
            <Icons.ZoomIn size={20} />
          </Button>
        </Card>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background gap={20} color={globalStyles.vars.colors.text[100]} />
      </ReactFlow>
    </main>
  );
}
