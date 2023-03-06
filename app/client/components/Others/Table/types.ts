import type { ReactNode } from "react";

type TableColumnProps<T = unknown> = {
  key: string;
  title: string;
  render?: (event: T) => void;
  showOrder?: boolean;
};

export type TableCollumnsProps<T = unknown> = TableColumnProps<T>[];

export type TableProps = {
  columns: TableCollumnsProps<any>;
  data: any[];
  showCheckbox?: boolean;
  content?: ReactNode;
};
