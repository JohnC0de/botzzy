import { useReactFlow } from "reactflow";

import { Button, Card } from "~/client/components";
import { Icons } from "~/client/icons";

import { NodesDrawer } from "../NodesDrawer";
import { floatingInteractionAreaContainerStyle } from "./styles.css";

export function FloatingInteractionArea() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  return (
    <div className={floatingInteractionAreaContainerStyle}>
      <Card
        boxShadow="xs"
        radii="xs"
        direction="column"
        showBgColor
        space={2}
        spacing={1}
      >
        <NodesDrawer />

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
          <Icons.ZoomOut size={20} />
        </Button>
        <Button
          title="Ajustar visualização"
          onClick={() => fitView({ duration: 200, maxZoom: 1.5 })}
          space={2}
          variant="ghost"
        >
          <Icons.Fullscreen size={20} />
        </Button>
      </Card>
    </div>
  );
}
