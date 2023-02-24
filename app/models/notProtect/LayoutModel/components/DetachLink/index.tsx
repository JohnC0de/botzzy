import { Link, useLocation } from "@remix-run/react";
import type { IconType } from "react-icons";
import { detachLinkContainerStyle, detachLinkIconStyle } from "./styles.css";

type DetachLinkProps = {
  to: string;
  label: string;
  icon: IconType;
};

export function DetachLink({ icon: Icon, label, to }: DetachLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link
      className={detachLinkContainerStyle({ isActive })}
      to={to}
      prefetch="intent"
      rel="prefetch"
    >
      <Icon className={detachLinkIconStyle} />
      {label}
    </Link>
  );
}
