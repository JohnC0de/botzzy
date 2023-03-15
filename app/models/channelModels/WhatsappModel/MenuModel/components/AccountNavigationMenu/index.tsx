import { AccountNavigationLink } from "../AccoountNavigationLink";
import { navigationContainerStyle } from "./styles.css";

export function AccountNavigationMenu() {
  return (
    <nav className={navigationContainerStyle}>
      <AccountNavigationLink content="Principal" redirectKey="qrcode" />
    </nav>
  );
}
