import { useId } from "react";
import { Card, Input } from "~/client/components";

type InputCardProps = {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
};

export function InputCard({
  label,
  defaultValue,
  isDisabled,
  placeholder,
}: InputCardProps) {
  const id = useId();
  return (
    <Card align="center" spacing={8} wrap="wrap" justify="space-between">
      <label htmlFor={id} style={{ flex: 1 }}>
        <strong>{label}</strong>
      </label>
      <Card direction="column" style={{ flex: 2 }}>
        <Input
          id={id}
          disabled={isDisabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </Card>
    </Card>
  );
}
