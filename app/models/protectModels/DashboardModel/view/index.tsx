import { ClientOnly } from "remix-utils";
import { Card, Container, Header } from "~/client/components";
import { Chart } from "../components/Chart/index.client";
import { Stats } from "../components/Stats";

export function View() {
  return (
    <Container>
      <Header title="Home" />

      <Card
        spacing={4}
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <Stats
          content="$21,827.13"
          title="Revenue"
          subTitle="vs. 3 months prior to 23 Dec"
          badge={{ content: "11.4%", type: "input" }}
        />
        <Stats
          content="$21,827.13"
          title="Revenue"
          subTitle="vs. 3 months prior to 23 Dec"
          badge={{ content: "11.4%", type: "input" }}
        />
        <Stats
          content="$21,827.13"
          title="Revenue"
          subTitle="vs. 3 months prior to 23 Dec"
          badge={{ content: "11.4%", type: "input" }}
        />
        <Stats
          content="$21,827.13"
          title="Revenue"
          subTitle="vs. 3 months prior to 23 Dec"
          badge={{ content: "11.4%", type: "input" }}
        />

        <Card
          showBgColor
          align="center"
          radii="xs"
          bordered="full"
          style={{ display: "grid", gridColumn: "1 / span 2" }}
          space={6}
        >
          <ClientOnly>{() => <Chart />}</ClientOnly>
        </Card>
      </Card>
    </Container>
  );
}
