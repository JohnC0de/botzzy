import { Button, Card, Divider, Header } from "~/client/components";
import { InputCard } from "../components/InputCard";

export function View() {
  function handleReset() {
    if (window) window.location.reload();
  }

  return (
    <Card direction="column" space={4} spacing={8}>
      <Header
        title="Resetar senha"
        subTitle="Digite sua senha atual e nova para redefinir sua senha."
        titleFontSize="lg"
      />

      <InputCard label="Senha atual" />
      <Divider />
      <InputCard label="Nova senha" />
      <Divider />
      <InputCard label="Confirmar senha" />

      <Card align="center" justify="flex-end" spacing={2} showBgColor>
        <Button variant="ghost" onClick={handleReset}>
          Resetar
        </Button>
        <Button variant="default">Atualizar senha</Button>
      </Card>
    </Card>
  );
}
