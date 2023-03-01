import type { ReactNode } from "react";

export type TableColumnProps<T = unknown> = {
  key: string;
  title: string;
  render?: (event: T) => void;
  showOrder?: boolean;
};

export type TableProps = {
  columns: TableColumnProps<any>[];
  data: any[];
  showCheckbox?: boolean;
  content?: ReactNode;
};
