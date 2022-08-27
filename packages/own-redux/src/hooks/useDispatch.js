import { useContext } from 'react';
import { DispatchContext } from '../Context';


function useDispatch() {
  return useContext(DispatchContext);
}

export default useDispatch;
