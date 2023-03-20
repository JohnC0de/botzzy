import { Icons } from "~/client/icons";
import LogoIcon from "~/client/assets/logo_icon.png";

import { MenuContainer } from "./MenuContainer";
import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <MenuContainer>
      <img src={LogoIcon} alt="Botzzy Logo" />

      <MenuButton
        label="Cruds"
        icon={Icons.Archive}
        menuKey="cruds"
        options={[
          {
            icon: Icons.Cast,
            label: "Canais",
            to: "/v1/protect/channels",
          },
          {
            icon: Icons.Category,
            label: "Integrações",
            to: "/v1/protect/integrations",
          },
        ]}
      />

      <MenuButton
        label="Afiliado"
        icon={Icons.User}
        menuKey="my_settings"
        options={[
          {
            icon: Icons.Dollar,
            label: "Vendas",
            to: "/v1/protect/affiliated",
          },
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
