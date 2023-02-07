import { useState } from "react";
import { Button, Card, Menu, Spinner } from "~/client/components";
import { useToast } from "~/client/hooks";

export function View() {
  const [isLoading1, setIsLoading1] = useState(false);
  function handleActivateLoading1() {
    setIsLoading1(true);
    setTimeout(() => setIsLoading1(false), 4000);
  }

  const [isLoading2, setIsLoading2] = useState(false);
  function handleActivateLoading2() {
    setIsLoading2(true);
    setTimeout(() => setIsLoading2(false), 4000);
  }

  const [isLoading3, setIsLoading3] = useState(false);
  function handleActivateLoading3() {
    setIsLoading3(true);
    setTimeout(() => setIsLoading3(false), 4000);
  }

  const { fireToast } = useToast();
  function handleFireToast(type: "error" | "success" | "warning" | "info") {
    fireToast({ type, message: type + "toast" });
  }

  return (
    <Card space={4} spacing={4} direction="column">
      <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
        <Button isLoading={isLoading1} onClick={handleActivateLoading1}>
          Super Button
        </Button>
        <Button
          isLoading={isLoading2}
          onClick={handleActivateLoading2}
          variant="outline"
        >
          Outline button
        </Button>
        <Button
          isLoading={isLoading3}
          onClick={handleActivateLoading3}
          variant="ghost"
        >
          Ghost button
        </Button>
      </Card>

      <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
        <Spinner size="2xl" />
      </Card>

      <Card space={4} spacing={2} radii="xs" showBgColor boxShadow="xs">
        <Menu
          options={[
            <div key="a">Choose a toast</div>,
            <Button
              key="a"
              style={{ width: "100%" }}
              onClick={() => handleFireToast("error")}
            >
              Error
            </Button>,
            <Button
              key="a"
              style={{ width: "100%" }}
              onClick={() => handleFireToast("info")}
            >
              info
            </Button>,
            <Button
              key="a"
              style={{ width: "100%" }}
              onClick={() => handleFireToast("success")}
            >
              success
            </Button>,
            <Button
              key="a"
              style={{ width: "100%" }}
              onClick={() => handleFireToast("warning")}
            >
              warning
            </Button>,
          ]}
        >
          <Button>Fire toast</Button>
        </Menu>
      </Card>
    </Card>
  );
}
