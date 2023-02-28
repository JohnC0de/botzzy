import { Card } from "~/client/components";
import { Icons } from "~/client/icons";
import {
  badgeStyle,
  tableContainerStyle,
  tableTheadStyle,
  tableThStyle,
  tbodyTrStyle,
} from "./styles.css";
import type { TableProps } from "./types";

export function Table({ columns, data, showCheckbox = false }: TableProps) {
  return (
    <Card space={6} radii="sm" showBgColor direction="column">
      <table className={tableContainerStyle}>
        <thead className={tableTheadStyle}>
          <tr>
            {columns.map((column, index) => (
              <th
                key={column.key + "_thead_column"}
                className={tableThStyle({
                  showOrder: column.showOrder,
                  firstChild: index === 0,
                  lastChild: index + 1 === columns.length,
                })}
              >
                <Card space={4} align="center" justify="space-between">
                  {column.title}
                  {column.showOrder && (
                    <span
                      style={{
                        position: "relative",
                        height: "1.5rem",
                      }}
                    >
                      <Icons.CaretTop
                        style={{ position: "absolute", top: "0" }}
                        size={15}
                      />
                      <Icons.CaretDown
                        style={{ position: "absolute", bottom: "0" }}
                        size={15}
                      />
                    </span>
                  )}
                </Card>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem, dataIndex) => (
            <tr key={dataItem.id + "_tbody_item_row"}>
              {columns.map((column) => (
                <td
                  className={tbodyTrStyle({
                    isNotLastChield: dataIndex + 1 !== data.length,
                  })}
                  key={column.key + "_tbody_item_column"}
                >
                  {column.render ? (
                    <>{column.render(dataItem)}</>
                  ) : (
                    <span className={badgeStyle({ variant: column.showBadge })}>
                      {dataItem[column.key]}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
