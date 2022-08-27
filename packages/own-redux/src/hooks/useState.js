import { useContext } from 'react';
import { StateContext } from '../Context';


function useStoreState() {
  return useContext(StateContext);
}

export default useStoreState;
