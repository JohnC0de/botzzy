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
            icon: Icons.Branch,
            label: "Integrações",
            to: "/v1/protect/integrations",
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
