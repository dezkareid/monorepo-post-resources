import List from '../../../components/List';
import useDispatch from '../../../hooks/useDispatch';
import useSelector from '../../../hooks/useSelector';
import { removeTodo } from '../../../store/actions';

function todosSelector(state) {
  return state.todos;
}

function ToDoList() {
  const dispatch = useDispatch();
  const list = useSelector(todosSelector);
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
