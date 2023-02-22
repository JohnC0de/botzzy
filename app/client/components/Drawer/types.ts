import type { ReactNode } from "react";

export type DrawerProps = {
  position?: "left" | "right";
  title?: string;
  isVisible: boolean;
  makeInvisible: () => void;
  children?: ReactNode;
  showOverlay?: boolean;
};
