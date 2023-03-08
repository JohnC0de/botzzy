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
    <Card direction="row" spacing={8} align="center" wrap="wrap">
      <label htmlFor={id} style={{ flex: 1 }}>
        <strong>{label}</strong>
      </label>
      <Card direction="column" style={{ flex: 2 }}>
        <Input
          id={id}
          type="password"
          disabled={isDisabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </Card>
    </Card>
  );
}
