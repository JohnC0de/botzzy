import { Card } from "~/client/components";
import { Position } from "reactflow";
import type { NodeProps } from "reactflow";

import { NodePort } from "../../components/NodePort";

import { initialNodeContainer } from "./styles.css";
import { Icons } from "~/client/icons";
import { globalStyles } from "~/client/styles";

export function InitialNode({ data }: NodeProps) {
  return (
    <>
      <div className={initialNodeContainer}>
        <Card spacing={3} align="center">
          <Card
            space={2}
            radii="xs"
            style={{ background: globalStyles.vars.colors.indigo[500] }}
          >
            <Icons.ChevronBottom size={30} color="#FFF" />
          </Card>

          <p>{data.label}</p>
        </Card>
      </div>
      <NodePort type="source" position={Position.Bottom} />
    </>
  );
}
