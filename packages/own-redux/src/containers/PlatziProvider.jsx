import React, { useReducer } from 'react';
import { InputContext, TodosContext, DispatchContext, StateContext } from '../Context';
import initialState from '../store/initialState';
import reducer from '../store/reducer';

function PlatziProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <DispatchContext.Provider value={dispatch}>
    <StateContext.Provider value={state}>
      <InputContext.Provider value={state.input}>
        <TodosContext.Provider value={state.todos}>
          {children}
        </TodosContext.Provider>
      </InputContext.Provider>
    </StateContext.Provider>
  </DispatchContext.Provider>
}

export default PlatziProvider;
