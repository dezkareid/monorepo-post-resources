import { useContext } from "react";
import { Context } from "./Context";
import { store } from "./store";

export function useStore() {
  return useContext(Context);
}

export function useStoreHandMade() {
  return store;
}