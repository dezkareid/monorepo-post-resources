import { useContext } from 'react';
import { TodosContext } from '../Context';


function useTodos() {
  return useContext(TodosContext);
}

export default useTodos;
