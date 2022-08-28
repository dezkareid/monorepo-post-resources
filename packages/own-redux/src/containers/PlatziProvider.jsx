import { DispatchContext, GlobalContext } from '../Context';
import { store } from '../store';
import reducer from '../store/reducer';

function dispatch(action) {
  const newState = () => reducer(store.getState(), action);
  store.setState(newState);
}

function PlatziProvider({ children }) {
  return <DispatchContext.Provider value={dispatch}>
    <GlobalContext.Provider value={store}>
      {children}
    </GlobalContext.Provider>
  </DispatchContext.Provider>
}

export default PlatziProvider;
