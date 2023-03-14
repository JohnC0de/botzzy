import { useLoaderData, useNavigate } from "@remix-run/react";
import { Badge, Button, Card } from "~/client/components";
import { Icons } from "~/client/icons";
import { useCrud } from "~/client/hooks";
import whatsapp_logo from "~/client/assets/whatsapp_logo.png";

import { tableTd, tableTh } from "./styles.css";
import type { loaderReturnProps } from "../../types";

export function ChannelsTable() {
  const { channels } = useLoaderData<loaderReturnProps>();
  const { openDeleteModal } = useCrud();
  const navigate = useNavigate();

  return (
    <table
      style={{
        borderCollapse: "separate",
        borderSpacing: "0 8px",
        marginTop: "2rem",
      }}
    >
      <thead>
        <tr>
          <th></th>
          <th className={tableTh}>Nome do canal:</th>
          <th className={tableTh}>Status:</th>
          <th className={tableTh}>Status conexão:</th>
          <th className={tableTh}>Adicionado em:</th>
          <th className={tableTh}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {channels.map((channel) => (
          <tr key={channel.id + "channel_row"}>
            <td style={{ borderRadius: "4px 0 0 4px" }} className={tableTd}>
              <Card justify="center" direction="column">
                <img
                  src={whatsapp_logo}
                  alt="superimagem"
                  height={48}
                  width={48}
                  style={{ marginLeft: "1rem", borderRadius: "4px" }}
                />
              </Card>
            </td>
            <td className={tableTd}>{channel.internal_name}</td>
            <td className={tableTd}>
              <Badge
                variant={
                  channel.state === "Ativo"
                    ? "success"
                    : channel.state === "Inativo"
                    ? "danger"
                    : "warning"
                }
              >
                {channel.state}
              </Badge>
            </td>
            <td className={tableTd}>
              <Badge
                variant={
                  channel.status_connection === "Conectado"
                    ? "success"
                    : "danger"
                }
              >
                {channel.status_connection}
              </Badge>
            </td>
            <td className={tableTd}>19/03/2023</td>
            <td style={{ borderRadius: "0 4px 4px 0" }} className={tableTd}>
              <Card>
                <Button
                  variant="ghost"
                  hoverVariant="danger"
                  onClick={() => openDeleteModal(channel.container_id)}
                >
                  <Icons.Trash size={20} />
                </Button>
                <Button
                  variant="ghost"
                  hoverVariant="primary"
                  onClick={() =>
                    navigate(
                      `/v1/protect/channels/whatsapp/${channel.container_id}`
                    )
                  }
                >
                  <Icons.Detail size={20} />
                </Button>
              </Card>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
