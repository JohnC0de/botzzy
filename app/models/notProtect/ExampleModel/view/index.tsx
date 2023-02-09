import { useOutletContext } from "@remix-run/react";
import { useState } from "react";
import {
  Button,
  Card,
  Drawer,
  Input,
  Modal,
  Popover,
  Spinner,
} from "~/client/components";

export function View() {
  const outletContext = useOutletContext<any>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState<any>("");
  return (
    <>
      <Card space={4} spacing={4} direction="column">
        <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
          <Button>Default button</Button>
          <Button variant="outline">Outline button</Button>
          <Button variant="ghost">Ghost button</Button>
        </Card>

        <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
          <Spinner size="xxs" />
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
          <Spinner size="2xl" />
        </Card>

        <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
          <Input placeholder="Write here..." />
          <Input variant="outline" placeholder="Write here..." />
          <Input variant="ghost" placeholder="Write here..." />
        </Card>

        <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
          <Input label="Text input:" placeholder="Write here..." />
          <Input label="Currency input:" type="currency" />
          <Input
            label="Mask input:"
            type="mask"
            mask="999.999.999-99"
            placeholder="Write here..."
          />
        </Card>

        <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
          <Button onClick={outletContext.toggleDarkTheme}>Switch theme</Button>
          <Button onClick={() => setModalIsOpen(true)}>Modal</Button>
          <Popover position="bottom-right" button={<Button>Drawer</Button>}>
            <Card space={2} direction="column" spacing={1}>
              <Button
                style={{ whiteSpace: "nowrap" }}
                onClick={() => setDrawerIsOpen("left")}
              >
                Open left drawer
              </Button>
              <Button
                style={{ whiteSpace: "nowrap" }}
                onClick={() => setDrawerIsOpen("right")}
              >
                Open rigth drawer
              </Button>
            </Card>
          </Popover>
        </Card>
      </Card>

      <Modal
        isVisible={modalIsOpen}
        title="I love modal's"
        makeInvisible={() => setModalIsOpen(false)}
      >
        <Card space={4} style={{ maxWidth: "30rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          laboriosam, voluptas magni praesentium, ullam et id consequatur dolor
          sit cum sapiente hic. Nihil, non iusto. Mollitia voluptas quia error
          et.
        </Card>
        <Card
          space={4}
          spacing={2}
          justify="flex-end"
          bordered="top"
          showBgColor
        >
          <Button onClick={() => setModalIsOpen(false)} variant="ghost">
            Cancel
          </Button>
          <Button>Confirm</Button>
        </Card>
      </Modal>

      <Drawer
        isVisible={!!drawerIsOpen}
        position={drawerIsOpen}
        title="I love drawing"
        makeInvisible={() => setDrawerIsOpen("")}
      >
        <Card space={4} style={{ maxWidth: "20rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          laboriosam, voluptas magni praesentium, ullam et id consequatur dolor
          sit cum sapiente hic. Nihil, non iusto. Mollitia voluptas quia error
          et.
        </Card>
      </Drawer>
    </>
  );
}
