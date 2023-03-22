import { Outlet } from "@remix-run/react";

import {
  authContainerStyle,
  authHeroStyle,
  authContentStyle,
} from "./styles.css";

export function View() {
  return (
    <main className={authContainerStyle}>
      <section className={authHeroStyle}>
        <h1 style={{ color: "#FFF", fontSize: "2rem" }}>Botzzy</h1>
        <footer style={{ color: "#FFF" }}>
          Copyright © 2023 <strong>Botzzy</strong>
        </footer>
      </section>

      <section className={authContentStyle}>
        <Outlet />
      </section>
    </main>
  );
}
