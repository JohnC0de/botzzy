import type { LinksFunction } from "@remix-run/node";
import styles from "~/client/styles/flow.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};
