import { motion } from "framer-motion";

import { globalStyles } from "~/client/styles";
import { Icons } from "~/client/icons";
import { useLayout } from "~/client/hooks";
import { Button } from "~/client/components";

import {
  detachMenuContainerStyle,
  detachMenuContentStyle,
  detachMenuHeaderStyle,
} from "./styles.css";
import { DetachLink } from "../DetachLink";

const { vars } = globalStyles;
export function DetachMenu() {
  const { menuIsDetach, handleCloseDetachMenu, options } = useLayout();

  return (
    <motion.nav
      initial={{ minWidth: 0, maxWidth: 0 }}
      animate={{
        minWidth: menuIsDetach ? "15.65rem" : 0,
        maxWidth: menuIsDetach ? "15.65rem" : 0,
      }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className={detachMenuContainerStyle}
    >
      <header className={detachMenuHeaderStyle}>
        <h3 style={{ color: vars.colors.text[900], whiteSpace: "nowrap" }}>
          {menuIsDetach && menuIsDetach[1]}
        </h3>

        <Button
          space={2}
          radii="full"
          variant="ghost"
          onClick={handleCloseDetachMenu}
        >
          <Icons.ChevronLeft size={20} color={vars.colors.text[900]} />
        </Button>
      </header>

      <ul className={detachMenuContentStyle}>
        {options.map((option) => (
          <DetachLink key={option.label + option.to} {...option} />
        ))}

        {options.length === 0 && (
          <div style={{ minWidth: "13.65rem" }}>
            <h4
              style={{
                margin: "auto 0",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              Pelo visto essa aba não <br /> possui links...
            </h4>
          </div>
        )}
      </ul>
    </motion.nav>
  );
}
