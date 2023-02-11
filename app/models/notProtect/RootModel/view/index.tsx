import { useState } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ToastContextProvider } from "~/client/contexts";
import { globalStyles } from "~/client/styles";
import { useRoot } from "~/client/hooks";

export function View() {
  const { theme } = useRoot();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");
  const toggleTheme = () => setIsDarkTheme((oldState) => !oldState);

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
        <ToastContextProvider>
          <Outlet context={{ isDarkTheme, toggleTheme }} />
        </ToastContextProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
