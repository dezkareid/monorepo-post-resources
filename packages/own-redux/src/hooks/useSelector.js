import { useCallback, useSyncExternalStore } from 'react';
import useStore from './useStore';


const useSelector = (selector) => {
  const store = useStore();
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  );
}

export default useSelector;