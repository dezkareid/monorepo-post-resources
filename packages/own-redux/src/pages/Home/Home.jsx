import ToDoInput from "./containers/TodoInput";
import ToDoList from "./containers/TodoList";
import { useState } from "react";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const onSubmit = (todoItem) => {
    setTodoList([{ id: Date.now(), text: todoItem }, ...todoList])
  }

  const onDelete = (todoId) => {
    const filteredTodoList = todoList.filter(({ id }) => id !== todoId)
    setTodoList(filteredTodoList)
  }

  return (
    <section>
      <ToDoInput onSubmit={onSubmit} />
      <ToDoList list={todoList} onDelete={onDelete} />      
    </section>
  )
}

export default Home;