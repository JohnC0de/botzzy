export type TableColumnProps<T = unknown> = {
  key: string;
  title: string;
  render?: (event: T) => void;
  showOrder?: boolean;
  showBadge?: "success" | "warning" | "danger" | "info";
};

export type TableProps = {
  columns: TableColumnProps[];
  data: any[];
  showCheckbox?: boolean;
};
