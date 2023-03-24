import ptLenguage from "../json/lenguage-en.json";
import enLenguage from "../json/lenguage-pt.json";
import { useRoot } from "./useRoot";

export function useLenguage() {
  const { lenguage: rootLenguage } = useRoot();

  function lenguage() {
    switch (rootLenguage) {
      case "pt-br":
        return ptLenguage;
      case "en":
        return enLenguage;
    }
  }

  return {
    lenguage: lenguage(),
  };
}
