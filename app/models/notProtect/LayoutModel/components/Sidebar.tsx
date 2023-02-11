import { Icons } from "~/client/icons";
import { SidebarContainer } from "./SidebarContainer";
import { SidebarLink } from "./SidebarLink";

type SidebarProps = {
  isOpen: boolean;
  drawerIsOpen: boolean;
  setDrawerIsOpen: (e: boolean) => void;
};

export function SideBar({
  isOpen,
  drawerIsOpen,
  setDrawerIsOpen,
}: SidebarProps) {
  return (
    <SidebarContainer
      drawerIsOpen={drawerIsOpen}
      isOpen={isOpen}
      setDrawerIsOpen={setDrawerIsOpen}
    >
      <SidebarLink to="/v1/test" icon={Icons.History}>
        Home
      </SidebarLink>
      <SidebarLink to="/v1/tesast" icon={Icons.History}>
        Home
      </SidebarLink>
    </SidebarContainer>
  );
}
