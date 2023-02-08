import { useOutletContext } from "@remix-run/react";
import { Button, Card, Popover } from "~/client/components";

export function View() {
  const outletContext = useOutletContext<any>();
  const position = "top-left";

  return (
    <Card space={4} spacing={6} direction="column">
      <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
        <Popover position={position} button={<Button>Switch Theme</Button>}>
          <Card space={2} direction="column" spacing={1}>
            <h4>Popover</h4>
            <Button
              style={{ whiteSpace: "nowrap" }}
              onClick={outletContext.toggleDarkTheme}
            >
              switch to theme {outletContext.isDarkTheme ? "light" : "dark"}
            </Button>
          </Card>
        </Popover>
      </Card>

      <Card space={4} justify="center" radii="xs" showBgColor boxShadow="xs">
        <Popover position={position} button={<Button>Switch Theme</Button>}>
          <Card space={2} direction="column" spacing={1}>
            <h4>Popover</h4>
            <Button
              style={{ whiteSpace: "nowrap" }}
              onClick={outletContext.toggleDarkTheme}
            >
              switch to theme {outletContext.isDarkTheme ? "light" : "dark"}
            </Button>
          </Card>
        </Popover>
      </Card>

      <Card space={4} justify="flex-end" radii="xs" showBgColor boxShadow="xs">
        <Popover position={position} button={<Button>Switch Theme</Button>}>
          <Card space={2} direction="column" spacing={1}>
            <h4>Popover</h4>
            <Button
              style={{ whiteSpace: "nowrap" }}
              onClick={outletContext.toggleDarkTheme}
            >
              switch to theme {outletContext.isDarkTheme ? "light" : "dark"}
            </Button>
          </Card>
        </Popover>
      </Card>
    </Card>
  );
}
