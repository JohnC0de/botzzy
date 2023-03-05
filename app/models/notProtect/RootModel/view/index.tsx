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
import { useLenguage, useRoot, useIsBot } from "~/client/hooks";

export function View() {
  const { theme } = useRoot();
  const isBot = useIsBot();
  const { activeLanguage } = useLenguage();

  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");
  const toggleTheme = () => setIsDarkTheme((oldState) => !oldState);

  return (
    <html
      lang={activeLanguage}
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
        {isBot ? null : <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
}
