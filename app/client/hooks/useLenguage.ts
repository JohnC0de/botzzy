import { useState } from "react";
import ptLenguage from "../json/lenguage-en.json";
import enLenguage from "../json/lenguage-pt.json";

export function useLenguage() {
  const [activeLanguage, setActiveLanguage] = useState<"pt-br" | "en">("pt-br");

  function lenguage() {
    switch (activeLanguage) {
      case "pt-br":
        return ptLenguage;
      case "en":
        return enLenguage;
    }
  }

  return {
    activeLanguage,
    setActiveLanguage,
    lenguage: lenguage(),
  };
}
