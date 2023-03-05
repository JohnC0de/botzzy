import { createContext, type ReactNode } from "react";

type IsBotProps = { isBot: boolean; children: ReactNode };
export const IsBotContext = createContext(false);

export function IsBotProvider({ isBot, children }: IsBotProps) {
  return (
    <IsBotContext.Provider value={isBot}>{children}</IsBotContext.Provider>
  );
}
