import { Button } from "~/client/components";
import type { ReactNode } from "react";

type MenuButtonProps = {
  value: string;
  content: ReactNode;
  onChange: (value: string) => void;
};

export function PopoverButton({ content, value, onChange }: MenuButtonProps) {
  return (
    <Button
      style={{ width: "100%" }}
      justify="initial"
      space={2}
      spacing={4}
      type="submit"
      variant="ghost"
      onClick={() => onChange(value)}
    >
      {content}
    </Button>
  );
}
