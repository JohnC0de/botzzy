import { useFetcher } from "@remix-run/react";

import { Button } from "~/client/components";
import { contentStyle, lineStyle } from "./styles.css";

type ToggleSidebarButtonProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export function ToggleSidebarButton({
  toggleSidebar,
  isOpen,
}: ToggleSidebarButtonProps) {
  const { Form } = useFetcher();
  return (
    <Form
      method="post"
      action="/api/switchsidebar"
      style={{ background: "inherit", marginRight: "auto" }}
    >
      <Button onClick={toggleSidebar} space={2} variant="ghost">
        <div className={contentStyle}>
          <span className={lineStyle} />
          <span className={lineStyle} />
          <span className={lineStyle} />
        </div>
      </Button>
    </Form>
  );
}
