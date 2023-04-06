import { useReducer, useState } from "react";

const todosList = [
  { id: 1, text: "Terminar un PR a las 3 de la mañana" },
  { id: 2, text: "Encontrar el one piece" },
];

function reducer(state, action) {
  if (action.type === "update") {
    return {
      ...state,
      x: action.payload,
    };
  }
}

function App() {
  const [_, distpatch] = useReducer(reducer, {});
  const onSubmitHandler = (event) => {
    event.preventDefault();
    distpatch({ type: "update", payload: 1 });
  };

  const listElements = todosList.map((todo) => (
    <li key={todo.id}>
      <p>{todo.text}</p>
    </li>
  ));

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <label>ToDo:</label>
        <input />
        <button type="submit">Add</button>
      </form>
      <div>
        <h2>Lista de pendientes</h2>
        {listElements}
      </div>
    </div>
  );
}

export default App;
