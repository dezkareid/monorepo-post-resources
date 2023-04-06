import { useReducer, useState } from "react";

function Form({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={onSubmit}>
      <label>ToDo:</label>
      <input value={value} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
}

function List({ todos, onRemove }) {
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
function App() {
  const [state, distpatch] = useReducer(reducer, initialState);
  const onSubmit = (event) => {
    event.preventDefault();
    distpatch({
      type: "add",
      payload: { id: Date.now(), text: state.todoInput },
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    distpatch({ type: "change", payload: event.target.value });
  };

  const onRemove = (event, todo) => {
    event.preventDefault();
    distpatch({ type: "remove", payload: todo });
  };

  return (
    <div className="App">
      <Form onSubmit={onSubmit} onChange={onChange} value={state.todoInput} />
      <List onRemove={onRemove} todos={state.todos} />
    </div>
  );
}

export default App;
