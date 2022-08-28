import { useContext } from 'react';
import { GlobalContext } from '../Context';


const useStore = () => {
  return useContext(GlobalContext);
}

export default useStore;
