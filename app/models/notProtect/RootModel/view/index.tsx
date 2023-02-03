import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import { globalStyles } from "~/styles";

export function View() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => setIsDarkTheme((oldState) => !oldState);

  return (
    <html
      lang="en"
      className={isDarkTheme ? globalStyles.darkTheme : globalStyles.lightTheme}
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet context={{ isDarkTheme, toggleDarkTheme }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
