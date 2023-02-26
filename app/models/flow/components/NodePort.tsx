import { useId } from "react";
import { Handle } from "reactflow";
import type { HandleProps } from "reactflow";

import { globalStyles } from "~/client/styles";
import { useFlow } from "../hook/useFlow";

interface NodePortProps extends HandleProps {
  alignAbsolutPosition?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

const { vars } = globalStyles;
export function NodePort({ alignAbsolutPosition, ...rest }: NodePortProps) {
  const { edges } = useFlow();
  const id = useId();

  const isActive =
    edges.find((edge) => edge.sourceHandle === id) ||
    edges.find((edge) => edge.targetHandle === id);

  return (
    <Handle
      id={id}
      isValidConnection={() => !isActive}
      style={{
        border: "none",
        padding: isActive ? "0.1rem" : "0.25rem",
        borderRadius: isActive ? vars.radii.full : "2px",
        background: !isActive ? vars.colors.primary[500] : vars.colors.line,
        ...alignAbsolutPosition,
      }}
      {...rest}
    />
  );
}
