import { Link, useLocation } from "@remix-run/react";
import { accountNavigationLinkStyle } from "./styles.css";

type AccountNavigationLinkProps = {
  content: string;
  redirectKey: string;
};

export function AccountNavigationLink({
  content,
  redirectKey,
}: AccountNavigationLinkProps) {
  const { pathname } = useLocation();
  const pathSplit = pathname.split("/");
  const lastPathName = pathSplit[pathSplit.length - 1];

  return (
    <Link
      to={redirectKey}
      className={accountNavigationLinkStyle({
        isActive: lastPathName === redirectKey,
      })}
    >
      {content}
    </Link>
  );
}
