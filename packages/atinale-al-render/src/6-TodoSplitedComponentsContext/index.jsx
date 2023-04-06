import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

const InputContext = createContext("");

const TodoContext = createContext([]);

const DispatchContext = createContext();

function Form() {
  const todoInput = useContext(InputContext);
  const distpatch = useContext(DispatchContext);
  const onSubmit = (event) => {
    event.preventDefault();
    distpatch({
      type: "add",
      payload: { id: Date.now(), text: todoInput },
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    distpatch({ type: "change", payload: event.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>ToDo:</label>
      <input value={todoInput} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
}

function List() {
  const todos = useContext(TodoContext);
  const distpatch = useContext(DispatchContext);
  const onRemove = (event, todo) => {
    event.preventDefault();
    distpatch({ type: "remove", payload: todo });
  };
  const listElements = todos.map((todo) => (
    <li key={todo.id}>
      <p>{todo.text}</p>
      <button onClick={(event) => onRemove(event, todo)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <h2>Lista de pendientes</h2>
      {listElements}
    </div>
  );
}

function reducer(state, action) {
  if (action.type === "add") {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }
  if (action.type === "remove") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload.id),
    };
  }
  if (action.type === "change") {
    return {
      ...state,
      todoInput: action.payload,
    };
  }
  return state;
}

const initialState = {
  todoInput: "",
  todos: [],
};

function WrappedApp({ children }) {
  const [state, distpatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={distpatch}>
      <TodoContext.Provider value={state.todos}>
        <InputContext.Provider value={state.todoInput}>
          {children}
        </InputContext.Provider>
      </TodoContext.Provider>
    </DispatchContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

const MemoWrap = React.memo(() => (
  <WrappedApp>
    <App />
  </WrappedApp>
));

function WrapperOfWrappedApp() {
  const [counter, setCounter] = useState(0);
  const message = `Cuantas veces he renderizado? ${counter}`;
  const onClick = (event) => {
    event.preventDefault();
    setCounter((counter) => counter + 1);
  };
  return (
    <>
      <MemoWrap counter={counter} />
      <div>
        <button type="button" onClick={onClick}>
          {message}
        </button>
      </div>
    </>
  );
}

export default MemoWrap;
