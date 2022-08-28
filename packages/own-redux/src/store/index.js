import initialState from './initialState';

export const createStore = (initialState) => {
  let state = initialState;
  const getState = () => state;
  const listeners = new Set();
  const setState = (fn) => {
    state = fn(state);
    listeners.forEach((l) => l());
  }
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
  return { getState, setState, subscribe };
}

export const store = createStore(initialState)