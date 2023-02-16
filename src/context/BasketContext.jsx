import { createContext } from "react";

export const BasketContext = createContext();

export default function BasketProvider({ children }) {
  function basketHandler() {
    let baskets = [];
  }

  return <BasketContext.Provider>{children}</BasketContext.Provider>;
}
