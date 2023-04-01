import { useContext } from "react";
import { Context, InputContext, SetterContext } from "./Context";
import { useSelector } from "./useSelector";
import { useStore } from "./useStore";

const selectorInput = (state) => state.input;
export function Form() {
  const todoInput = useSelector(selectorInput);
  const { setState } = useStore();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTodo = { id: Date.now(), text: todoInput };
    setState((state) => ({
      ...state,
      todos: [...state.todos, newTodo],
      input: "",
    }));
  };

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setState((state) => ({ ...state, input: value }));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>ToDo:</label>
      <input value={todoInput} onChange={onChangeHandler} />
      <button type="submit">Add</button>
    </form>
  );
}
