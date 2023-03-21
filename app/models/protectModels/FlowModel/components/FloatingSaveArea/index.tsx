import { Button, Card } from "~/client/components";
import { useFlow } from "../../hook/useFlow";
import { floatingSaveAreaContainerStyle } from "./styles.css";

export function FloatingSaveArea() {
  const { saveFlow, isSavingFlow } = useFlow();
  return (
    <div className={floatingSaveAreaContainerStyle}>
      <Card
        boxShadow="xs"
        radii="xs"
        direction="row"
        showBgColor
        space={2}
        spacing={1}
      >
        <Button space={2} variant="ghost" disabled title="Já está salvo">
          Salvar rascunho
        </Button>
        <Button
          isLoading={isSavingFlow}
          onClick={() => saveFlow("/api/saveflow")}
          space={2}
          variant="ghost"
        >
          Salvar
        </Button>
      </Card>
    </div>
  );
}
