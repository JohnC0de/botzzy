import { Button, Card } from "~/client/components";
import { useRoot } from "~/client/hooks";

export function LenguageButton({ isLoading }: { isLoading: boolean }) {
  const { lenguage } = useRoot();
  return (
    <Card showBgColor>
      <Button
        type="submit"
        isLoading={isLoading}
        style={{ width: "100%" }}
        justify="initial"
        space={2}
        spacing={4}
        fontSize="xl"
        variant="ghost"
      >
        {lenguage === "pt-br" ? "🇧🇷" : "🇺🇸"}
      </Button>
    </Card>
  );
}
