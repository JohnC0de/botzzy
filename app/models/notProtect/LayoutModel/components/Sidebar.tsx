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
      isOpen={isOpen}
      drawerIsOpen={drawerIsOpen}
      setDrawerIsOpen={setDrawerIsOpen}
    >
      <SidebarLink to="/v1/test" icon={Icons.Archive}>
        Home
      </SidebarLink>
      <SidebarLink to="/v1/flow" icon={Icons.Layout}>
        Flow
      </SidebarLink>
    </SidebarContainer>
  );
}
