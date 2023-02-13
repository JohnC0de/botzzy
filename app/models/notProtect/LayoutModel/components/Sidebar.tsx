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
      isOpen={isOpen}
      drawerIsOpen={drawerIsOpen}
      setDrawerIsOpen={setDrawerIsOpen}
    >
      {isOpen && <SmallTitle>Usuário</SmallTitle>}
      <SidebarLink to="/v1/test" icon={Icons.Archive}>
        Home
      </SidebarLink>

      {isOpen && <SmallTitle>Admin (categorias)</SmallTitle>}
      <SidebarLink to="/v1/admin/faqcategories" icon={Icons.Archive}>
        Faq's
      </SidebarLink>
      <SidebarLink to="/v1/admin/coursescategories" icon={Icons.Archive}>
        Cursos
      </SidebarLink>
    </SidebarContainer>
  );
}
