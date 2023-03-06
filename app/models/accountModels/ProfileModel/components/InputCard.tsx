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
      <label htmlFor={id}>
        <strong>{label}</strong>
      </label>
      <Input
        id={id}
        size={40}
        disabled={isDisabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </Card>
  );
}
