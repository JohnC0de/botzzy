import { AccountNavigationLink } from "../AccoountNavigationLink";
import { navigationContainerStyle } from "./styles.css";

export function AccountNavigationMenu() {
  return (
    <nav className={navigationContainerStyle}>
      <AccountNavigationLink content="Perfil" redirectKey="profile" />
      <AccountNavigationLink content="Senha" redirectKey="password" />
      <AccountNavigationLink content="Pagamentos" redirectKey="payment" />
    </nav>
  );
}
