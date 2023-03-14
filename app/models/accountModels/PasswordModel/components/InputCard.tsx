import { useId } from "react";
import { Card, Input } from "~/client/components";

type InputCardProps = {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  name?: string;
  error?: string | null;
};

export function InputCard({
  label,
  defaultValue,
  isDisabled,
  placeholder,
  error,
  name,
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
          name={name}
          error={error}
          type="password"
          disabled={isDisabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </Card>
    </Card>
  );
}
