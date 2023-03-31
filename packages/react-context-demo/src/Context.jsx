import { createContext, useMemo, useState } from "react";
import { createStore, store } from "./store";

export const Context = createContext({
  input: "",
  todos: [],
});

export const InputContext = createContext("");

export const TodosContext = createContext([]);

export const SetterContext = createContext();

export function GlobalProvider({ initialProps, children }) {
  const store = useMemo(() => createStore(initialProps), [initialProps]);
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
