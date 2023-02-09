import type { ReactNode } from "react";

export type ModalProps = {
  title?: string;
  children?: ReactNode;
  isVisible: boolean;
  makeInvisible: () => void;
};
