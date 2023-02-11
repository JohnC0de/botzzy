import { useFetcher } from "@remix-run/react";
import { motion } from "framer-motion";
import { Button } from "~/client/components";
import { contentStyle, span1Style, span2Style, span3Style } from "./styles.css";

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
      style={{ background: "inherit" }}
    >
      <Button onClick={toggleSidebar} space={2} variant="ghost">
        <motion.div
          animate={isOpen ? { alignItems: "start" } : { alignItems: "end" }}
          className={contentStyle}
        >
          <span className={span1Style} />
          <span className={span2Style} />
          <span className={span3Style} />
        </motion.div>
      </Button>
    </Form>
  );
}
