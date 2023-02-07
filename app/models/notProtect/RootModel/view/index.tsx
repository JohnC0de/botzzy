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

export function View() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
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
        <ToastContextProvider>
          <Outlet context={{ isDarkTheme, toggleDarkTheme }} />
        </ToastContextProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
