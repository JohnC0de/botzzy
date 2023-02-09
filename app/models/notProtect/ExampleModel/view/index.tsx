import { useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { Button, Card, Drawer, Modal, Popover } from "~/client/components";

export function View() {
  const outletContext = useOutletContext<any>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  return (
    <>
      <Card space={4} spacing={6} direction="column">
        <Card space={4} radii="xs" showBgColor boxShadow="xs">
          <Popover
            position="top-right"
            button={<Button>Popover options</Button>}
          >
            <Card space={2} direction="column" spacing={1}>
              <Button onClick={outletContext.toggleDarkTheme}>
                Switch theme
              </Button>
              <Button onClick={() => setModalIsOpen(true)}>Open modal</Button>
              <Button onClick={() => setDrawerIsOpen(true)}>Open drawer</Button>
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
          <Button variant="ghost">Cancel</Button>
          <Button>Confirm</Button>
        </Card>
      </Modal>

      <Drawer
        isVisible={drawerIsOpen}
        title="I love drawing"
        makeInvisible={() => setDrawerIsOpen(false)}
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
