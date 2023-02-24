import { createContext, useEffect, useState } from "react";
import { useLocation } from "@remix-run/react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type LayoutMenuLinkOptions = {
  label: string;
  icon: IconType;
  to: string;
};

type LayoutContextProps = {
  menuIsDetach: null | string[];
  handleOpenDetachMenu: (key: string[]) => void;
  handleCloseDetachMenu: () => void;

  drawerIsCollapse: boolean;
  handleOpenDrawer: () => void;
  handleCloseDrawer: () => void;
  options: LayoutMenuLinkOptions[];
  setOptions: (options: LayoutMenuLinkOptions[]) => void;
};

type LayoutContextProviderProps = {
  children: ReactNode;
};

export const LayoutContext = createContext({} as LayoutContextProps);

export function LayoutContextProvider({
  children,
}: LayoutContextProviderProps) {
  const [options, setOptions] = useState<LayoutMenuLinkOptions[]>([]);

  // Detach MENU
  const [menuIsDetach, setMenuIsDetach] = useState<null | string[]>(null);
  const handleOpenDetachMenu = (key: string[]) => setMenuIsDetach(key);
  const handleCloseDetachMenu = () => setMenuIsDetach(null);

  // Drawer MENU
  const [drawerIsCollapse, setDrawerIsCollapse] = useState(false);
  const handleOpenDrawer = () => setDrawerIsCollapse(true);
  const handleCloseDrawer = () => setDrawerIsCollapse(false);

  // Close drawer whenever you change location
  const { pathname } = useLocation();
  useEffect(() => setDrawerIsCollapse(false), [pathname]);

  return (
    <LayoutContext.Provider
      value={{
        menuIsDetach,
        handleOpenDetachMenu,
        handleCloseDetachMenu,
        drawerIsCollapse,
        handleOpenDrawer,
        handleCloseDrawer,
        options,
        setOptions,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
