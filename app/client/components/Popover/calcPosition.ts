import type { Dispatch, RefObject } from "react";
import type { PositionProps } from "./types";

type CalcPositionProps = {
  initialPosition: PositionProps;
  popoverContentRef: RefObject<HTMLDivElement>;
  setDirection: Dispatch<React.SetStateAction<PositionProps>>;
};

export function calcPosition({
  initialPosition,
  popoverContentRef,
  setDirection,
}: CalcPositionProps) {
  if (!popoverContentRef.current) return;
  const popoverW = popoverContentRef.current.clientWidth;
  const popoverH = popoverContentRef.current.clientHeight;

  const windowWidth = window.visualViewport?.width || 0;
  const windowHeight = window.visualViewport?.height || 0;

  const position = popoverContentRef.current.getBoundingClientRect();

  switch (initialPosition) {
    case "top":
      if (popoverH > position.bottom) setDirection("bottom");
      break;
    case "bottom":
      const bMinus = windowHeight - position.top;
      if (bMinus < popoverH) setDirection("top");
      break;
    case "left":
      const lMinus = windowWidth - position.right;
      if (popoverW < lMinus) setDirection("right");
      break;
    case "right":
      const rMinus = windowWidth - position.left;
      if (popoverW < rMinus) setDirection("left");
      break;
    case "top-left":
      if (popoverH > position.bottom) setDirection("bottom-left");
      break;
    case "top-right":
      if (popoverH > position.bottom) setDirection("bottom-right");
      break;
    case "bottom-left":
      const blMinus = windowHeight - position.top;
      if (blMinus < popoverH) setDirection("top-left");
      break;
    case "bottom-right":
      const brMinus = windowHeight - position.top;
      if (brMinus < popoverH) setDirection("top-right");
      break;
  }

  console.log({ popoverW, popoverH, windowWidth, windowHeight, position });
}
