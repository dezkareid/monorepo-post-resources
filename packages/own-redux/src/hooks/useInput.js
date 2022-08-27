import { useContext } from 'react';
import { InputContext } from '../Context';


function useInput() {
  return useContext(InputContext);
}

export default useInput;
