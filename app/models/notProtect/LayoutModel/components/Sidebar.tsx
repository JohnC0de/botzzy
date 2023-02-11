import { Icons } from "~/client/icons";
import { SmallTitle } from "./SmallTitle";
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
      {isOpen && <SmallTitle>Admin (categorias)</SmallTitle>}
      <SidebarLink to="/v1/test" icon={Icons.Archive}>
        Faq's
      </SidebarLink>
      <SidebarLink to="/v1/tesast" icon={Icons.Archive}>
        Cursos
      </SidebarLink>
    </SidebarContainer>
  );
}
