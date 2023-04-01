import { useContext } from "react";
import { SetterContext, TodosContext } from "./Context";
import { useSelector } from "./useSelector";
import { useStore } from "./useStore";

const selectorTodos = (state) => state.todos;
export function List() {
  const todosList = useSelector(selectorTodos);
  const { setState } = useStore(); //useContext(SetterContext);

  const removeTodo = (todo) => {
    setState((state) => ({
      ...state,
      todos: state.todos.filter(({ id }) => id !== todo.id),
    }));
  };

  const listElements = todosList.map((todo) => (
    <li key={todo.id}>
      <p>{todo.text}</p>
      <button onClick={() => removeTodo(todo)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <h2>Lista de pendientes</h2>
      {listElements}
    </div>
  );
}
