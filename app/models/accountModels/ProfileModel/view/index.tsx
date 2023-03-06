import { Button, Card, Divider, Header } from "~/client/components";
import { useRoot } from "~/client/hooks";
import { InputCard } from "../components/InputCard";

export function View() {
  const { user } = useRoot();

  function handleReset() {
    if (window) window.location.reload();
  }

  return (
    <Card direction="column" space={4} spacing={8}>
      <Header
        title="Meu perfil"
        subTitle="Informações básicas, como seu nome e endereço, que serão exibidas ao público."
        titleFontSize="lg"
      />

      <InputCard
        label="Nome"
        placeholder="Seu nome aqui..."
        defaultValue={user.name}
      />

      <Divider />

      <InputCard
        label="Email"
        placeholder="Seu email aqui..."
        defaultValue={user.email}
      />

      <span></span>
      <span></span>

      <Header
        title="Preferências"
        subTitle="Sua preferência personalizada exibida em sua conta."
        titleFontSize="lg"
      />

      <InputCard
        label="Idioma"
        placeholder="Seu email aqui..."
        defaultValue="Português"
        isDisabled
      />

      <Card align="center" justify="flex-end" spacing={2} showBgColor>
        <Button variant="ghost" onClick={handleReset}>
          Resetar
        </Button>
        <Button variant="default">Atualizar</Button>
      </Card>
    </Card>
  );
}
