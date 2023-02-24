import { Icons } from "~/client/icons";

import { MenuContainer } from "./MenuContainer";
import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <MenuContainer>
      <img
        alt="Botzzy Logo"
        src="https://elstar.themenate.net/img/logo/logo-dark-streamline.png"
      />

      <MenuButton
        label="Cruds"
        icon={Icons.Archive}
        menuKey="cruds"
        options={[
          { icon: Icons.History, label: "Rota de test", to: "/v1/test" },
        ]}
      />

      <MenuButton
        label="Meu Fluxo"
        icon={Icons.Layout}
        menuKey="my-flow"
        options={[{ icon: Icons.QRCode, label: "Meu flow", to: "/v1/flow" }]}
      />
    </MenuContainer>
  );
}
