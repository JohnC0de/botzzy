import { Card } from "~/client/components";
import { Icons } from "~/client/icons";
import { tableContainerStyle, tableThStyle, tbodyTrStyle } from "./styles.css";
import type { TableProps } from "./types";

export type { TableCollumnsProps } from "./types";
export function Table({
  columns,
  data,
  content,
  showCheckbox = false,
}: TableProps) {
  return (
    <Card spacing={4} space={4} radii="xs" showBgColor direction="column">
      {content}
      <table className={tableContainerStyle}>
        <thead>
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
                  key={column.key + "_tbody_item_column"}
                  className={tbodyTrStyle({
                    isNotLastChield: dataIndex + 1 !== data.length,
                  })}
                >
                  {column.render
                    ? column.render(dataItem)
                    : dataItem[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
