import { useState } from "react";

const todosList = [
  { id: 1, text: "Terminar un PR a las 3 de la mañana" },
  { id: 2, text: "Encontrar el one piece" },
];

function Form() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Nothing");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>ToDo:</label>
      <input />
      <button type="submit">Add</button>
    </form>
  );
}

function List() {
  const listElements = todosList.map((todo) => (
    <li key={todo.id}>
      <p>{todo.text}</p>
    </li>
  ));

  return (
    <div>
      <h2>Lista de pendientes</h2>
      {listElements}
    </div>
  );
}

function App({ children }) {
  const [_, setAppState] = useState();
  const onClick = (event) => {
    event.preventDefault();
    setAppState(Date.now());
  };

  return (
    <div className="App">
      {children}
      <div>
        <button type="button" onClick={onClick}>
          Renderizalos a todos
        </button>
      </div>
    </div>
  );
}

function WrappedApp() {
  return (
    <App>
      <Form />
      <List />
    </App>
  );
}

export default WrappedApp;
