import { Link, useLocation } from "@remix-run/react";
import {
  linkStyle,
  svgContainerStyle,
  svgStyle,
  textStyle,
} from "./styles.css";

import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type SidebarLinkProps = {
  icon: IconType;
  to: string;
  children: ReactNode;
};

export function SidebarLink({ to, children, icon: Icon }: SidebarLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      className={linkStyle({ isActive })}
      to={to}
      rel="prefetch"
      prefetch="intent"
    >
      <div className={svgContainerStyle}>
        <Icon className={svgStyle({ isActive })} />
      </div>
      <p className={textStyle({ isActive })}>{children}</p>
    </Link>
  );
}
