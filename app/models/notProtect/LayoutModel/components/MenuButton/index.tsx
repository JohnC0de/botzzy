import type { IconType } from "react-icons";
import type { LayoutMenuLinkOptions } from "~/client/contexts/layoutContext";

import { useLayout } from "~/client/hooks";
import { buttonStyle } from "./styles.css";

type MenuButtonProps = {
  icon: IconType;
  label: string;
  menuKey: string;
  options: LayoutMenuLinkOptions[];
};

export function MenuButton({
  menuKey,
  label,
  options,
  icon: Icon,
}: MenuButtonProps) {
  const {
    setOptions,
    menuIsDetach,
    handleOpenDetachMenu,
    handleCloseDetachMenu,
  } = useLayout();
  const isActive = menuIsDetach ? menuIsDetach[0] === menuKey : false;
  function handleClick() {
    if (isActive) {
      handleCloseDetachMenu();
      setOptions([]);
    } else {
      handleOpenDetachMenu([menuKey, label]);
      setOptions(options);
    }
  }

  return (
    <button className={buttonStyle({ isActive })} onClick={handleClick}>
      <Icon
        style={{ transition: "all 0.2s" }}
        size={22}
        color={isActive ? "#FFFFFF" : "#e5e7eb"}
      />
    </button>
  );
}
