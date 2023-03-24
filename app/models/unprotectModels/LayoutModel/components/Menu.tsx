import { Icons } from "~/client/icons";
import LogoIcon from "~/client/assets/logo_icon.png";

import { MenuContainer } from "./MenuContainer";
import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <MenuContainer>
      <img src={LogoIcon} alt="Botzzy Logo" />

      <MenuButton
        label="Usuário"
        icon={Icons.User}
        menuKey="my_settings"
        options={[
          {
            icon: Icons.Home,
            label: "Home",
            to: "/v1/protect/dashboard",
          },
          {
            icon: Icons.Dollar,
            label: "Vendas",
            to: "/v1/protect/affiliated",
          },
        ]}
      />

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
    </MenuContainer>
  );
}
