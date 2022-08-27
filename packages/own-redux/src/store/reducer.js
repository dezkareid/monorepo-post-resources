import { SET_INPUT, ADD_TODO, REMOVE_TODO } from './types';

function setInput(state, action) {
  return { ...state, input: action.payload };
}

function addTodo(state, action) {
  return { ...state, todos: [...state.todos, action.payload]};
}

function removeTodo(state, action) {
  return { ...state, todos: state.todos.filter(({ id }) => id !== action.payload.id )};
}

const reducerMap = {
  [SET_INPUT]: setInput,
  [ADD_TODO]: addTodo,
  [REMOVE_TODO]: removeTodo      
}

function reducer(state, action) {
  const matchReducer = reducerMap[action.type];
  if (matchReducer) {
    return matchReducer(state, action);
  } else {
    throw new Error();
  }
}

export default reducer;
