import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { PopoverProps, PositionProps } from "./types";

import {
  contentContainerStyle,
  popoverContainerStyle,
  popoverOverlayStyle,
} from "./styles.css";
import { calcPosition } from "./calcPosition";

export function Popover({
  children,
  button,
  position = "bottom-right",
}: PopoverProps) {
  const popoverContentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState<PositionProps>(position);

  useEffect(() => {
    calcPosition({
      initialPosition: position,
      popoverContentRef,
      setDirection,
    });

    // const contentWidth = popoverContentRef.current.clientWidth;
    // const contentHeight = popoverContentRef.current.clientHeight;
    // const windowWidth = window.visualViewport?.width || 0;
    // const windowHeight = window.visualViewport?.height || 0;
    // const xPosition = popoverContentRef.current.getBoundingClientRect();
    // if (position === "right") {
    //   const minus = windowWidth - xPosition.x;
    //   if (contentWidth > minus) setDirection("left");
    // }
    // if (position === "top") {
    //   const minus = windowHeight - 0;
    //   console.log(minus, contentHeight);
    //   if (contentHeight - xPosition.y) setDirection("bottom");
    // }
  }, [direction, position]);

  return (
    <div className={popoverContainerStyle}>
      <span onClick={() => setIsOpen(true)}>{button}</span>

      <motion.div
        ref={popoverContentRef}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
        transition={{ duration: 0.1, ease: "linear" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        className={contentContainerStyle({ position: direction })}
      >
        {children}
      </motion.div>

      {isOpen && (
        <span
          onClick={() => setIsOpen(false)}
          className={popoverOverlayStyle}
        />
      )}
    </div>
  );
}
