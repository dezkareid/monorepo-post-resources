import { useContext } from 'react';
import FlagContext from './context';

function useFlag(name) {
  const store = useContext(FlagContext);
  if (Object.prototype.hasOwnProperty.call(store, name)) {
    return store[name];
  }
  return false;
}

export default useFlag;
