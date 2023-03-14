import { useNavigate } from "@remix-run/react";

import { Icons } from "~/client/icons";
import { Button, Container, Header } from "~/client/components";

export function WhatsappView() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header
        title="Editar canal"
        subTitle="Home > Canais > Whatsapp"
        content={
          <Button
            space={2}
            variant="outline"
            onClick={() => navigate("/v1/protect/channels")}
          >
            <Icons.ChevronLeft size={22} />
            Voltar
          </Button>
        }
      />
      asdsa
    </Container>
  );
}
