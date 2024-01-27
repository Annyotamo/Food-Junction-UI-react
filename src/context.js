import { createContext } from "react";
export const Context = createContext({cart: null, updateCart: () => {}, dispatch: () => {}});