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
  space?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 10
    | 12
    | 16
    | 20
    | 40
    | 64
    | 80
    | null;
  showCheckbox?: boolean;
  content?: ReactNode;
};
