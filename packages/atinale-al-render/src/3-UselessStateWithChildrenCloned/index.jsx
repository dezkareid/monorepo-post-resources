import React, { useState } from "react";

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

  const childrenCloned = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {});
    }
    return child;
  });

  return (
    <div className="App">
      {childrenCloned}
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
