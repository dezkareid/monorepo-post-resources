import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useStore } from "./useStore";

export function useSelector(selector) {
  const store = useStore();
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  );
  /*
  const { getState, subscribe } = useStore();
  const [selectorValue, setSelectorValue] = useState(getState()[selector]);
  const ref = useRef();
  ref.current = selectorValue;
  useEffect(() => {
    const subscriber = () => {
      const newState = getState()[selector];
      if (ref.current !== newState) {
        setSelectorValue(newState);
      }
    }
    const unsubscribe = subscribe(subscriber);
    return () => unsubscribe();
  },[selector]);

  return selectorValue;*/
}

export function useSelectorHandMade(selector) {
  const { getState, subscribe } = useStore();
  const ref = useRef();
  ref.current = selector(getState());
  const [selectorValue, setSelectorValue] = useState(ref.current);
  
  useEffect(() => {
    const subscriber = () => {
      const newState = getState()[selector];
      if (ref.current !== newState) {
        setSelectorValue(newState);
      }
    }
    const unsubscribe = subscribe(subscriber);
    return () => unsubscribe();
  },[selector]);

  return selectorValue;
}