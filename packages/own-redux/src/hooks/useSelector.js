import { useContext, useEffect, useRef, useState } from 'react';
import useStoreState from './useState';


function useSelector(selector) {
  const storeState = useStoreState();
  const [state, setState] = useState(selector(storeState));
  const refState = useRef(state);
  useEffect(() => {
    const actualState = selector(storeState);
    if (refState.current !== actualState) {
      console.log('update selector')
      setState(actualState);
    }
  }, [storeState, selector]);
  return state;
}

export default useSelector;
