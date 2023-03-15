/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  Form,
  useActionData,
  useFetcher,
  useOutletContext,
  useRevalidator,
  useTransition,
} from "@remix-run/react";

import { Badge, Button, Card, Divider, Header } from "~/client/components";
import { useToast } from "~/client/hooks";
import { globalStyles } from "~/client/styles";

import { InputCard } from "../components/InputCard";
import type { OutletContextProps } from "../../MenuModel";

const { vars } = globalStyles;
export function View() {
  const actionData = useActionData();
  useEffect(() => {
    if (actionData?.toast) fireToast(actionData.toast);
  }, [actionData]);

  const { channel } = useOutletContext<OutletContextProps>();
  const transition = useTransition();
  const { fireToast } = useToast();
  const { revalidate } = useRevalidator();

  const [qrCode, setQrCode] = useState("");
  const { submit, data, state } = useFetcher();

  useEffect(() => {
    if (data?.qrCode) setQrCode(data.qrCode);
  }, [data]);

  let time: NodeJS.Timeout;
  function generateQRcode() {
    setQrCode("");

    submit(
      { name: channel.name, apikey: channel.license_key },
      { action: "/api/generateqrcode", method: "post" }
    );

    setTimeout(() => {
      setQrCode("");
      clearInterval(time);
    }, 30000);

    time = setInterval(() => {
      revalidate();
    }, 3000);
  }

  function handleReset() {
    if (window) window.location.reload();
  }

  const connectionStatus =
    channel.status_connection === "Conectado" ? "success" : "danger";
  const status =
    channel.state === "Ativo"
      ? "success"
      : channel.state === "Inativo"
      ? "danger"
      : "warning";

  return (
    <Form method="post">
      <Card direction="column" space={4} spacing={8}>
        <Header
          title="Dados principais"
          subTitle="Edite e visualize os dados principais de seu canal."
          titleFontSize="lg"
        />

        <Form>
          <Card direction="column" spacing={8}>
            <InputCard
              label="Nome"
              name="name"
              isDisabled
              defaultValue={channel.name}
            />
            <InputCard
              label="Nome interno"
              name="internal_name"
              defaultValue={channel.internal_name}
              error={actionData?.error?.internal_name}
            />

            <Card align="center" justify="flex-end" spacing={2} showBgColor>
              <Button variant="ghost" type="button" onClick={handleReset}>
                Resetar
              </Button>
              <Button
                variant="default"
                isLoading={transition.state === "submitting"}
                name="_action"
                value="updatePassword"
              >
                Salvar
              </Button>
            </Card>
          </Card>
        </Form>

        <Divider />

        <Header
          title="Status de conexão"
          subTitle="Verifique a conexão do canal com seu Whatsapp."
          titleFontSize="lg"
        />

        <Card
          align="center"
          justify="space-between"
          style={{ maxWidth: "1100px" }}
        >
          <div style={{ fontWeight: vars.fontWeights.bold }}>Status</div>
          <Badge variant={status}>{channel.state}</Badge>
        </Card>
        <Card
          align="center"
          justify="space-between"
          style={{ maxWidth: "1100px" }}
        >
          <div style={{ fontWeight: vars.fontWeights.bold }}>
            Status de conexão
          </div>
          <Badge variant={connectionStatus}>{channel.status_connection}</Badge>
        </Card>

        {channel.status_connection === "Desconectado" && (
          <Card
            direction="column"
            align="center"
            justify="center"
            spacing={6}
            style={{ height: "23rem" }}
          >
            {connectionStatus === "danger" && (
              <>
                {qrCode ? (
                  <img src={qrCode} alt="QR code" style={{ height: "20rem" }} />
                ) : (
                  <>
                    <h2>Gere o QR code para conectar seu canal.</h2>
                    <Button
                      isLoading={state === "submitting"}
                      onClick={generateQRcode}
                    >
                      Gerar QRCode
                    </Button>
                  </>
                )}
              </>
            )}
          </Card>
        )}
      </Card>
    </Form>
  );
}
