import List from '../../../components/List';
import useDispatch from '../../../hooks/useDispatch';
import useTodos from '../../../hooks/useTodos';
import { removeTodo } from '../../../store/actions';

function ToDoList() {
  const dispatch = useDispatch();
  const list = useTodos();
  const listElements = list.map(todo => (
    <li key={todo.id}>
      <p>{todo.text}</p>
      <button onClick={() => dispatch(removeTodo(todo))}>Delete</button>
    </li>
  ));
  return (
    <div>
      <h2>Lista de pendientes</h2>
      <List>{listElements}</List>
    </div>
  );
}

export default ToDoList;
