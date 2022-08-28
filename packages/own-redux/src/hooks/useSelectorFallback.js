import { useCallback } from 'react';
import {useSyncExternalStore} from 'use-sync-external-store/shim'
import useStore from './useStore';



const useSelector = (selector) => {
  const store = useStore();
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  );
}

export default useSelector;