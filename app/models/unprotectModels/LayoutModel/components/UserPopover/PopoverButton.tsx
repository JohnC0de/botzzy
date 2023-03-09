import { useNavigate } from "@remix-run/react";
import { Button } from "~/client/components";
import type { IconType } from "react-icons";

type MenuButtonProps = {
  icon: IconType;
  text: string;
  to?: string;
};

export function PopoverButton({ icon: Icon, text, to }: MenuButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      style={{ width: "100%" }}
      justify="initial"
      space={2}
      onClick={() => to && navigate(to)}
      spacing={4}
      variant="ghost"
    >
      <Icon size={18} />
      <span style={{ whiteSpace: "nowrap" }}>{text}</span>
    </Button>
  );
}
