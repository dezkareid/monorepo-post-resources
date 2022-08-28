import Button from '../../../components/Button';
import Form from '../../../components/Form';
import Input from '../../../components/Input';
import useDispatch from '../../../hooks/useDispatch';
import useSelector from '../../../hooks/useSelector';
import { addTodo, setInput } from '../../../store/actions';

function inputSelector (state) {
  return state.input
}

function ToDoInput() {
  const input = useSelector(inputSelector);
  const dispatch = useDispatch();

  const onSubmitHandler = event => {
    event.preventDefault();
    dispatch(addTodo({ id: Date.now(), text: input }));
  };

  const onChangeHandler = event => {
    const { value } = event.target;
    dispatch(setInput(value));
  };

  return <Form onSubmit={onSubmitHandler}>
    <div>
      <Input labelText="To do: " value={input} onChange={onChangeHandler} />
    </div>
    <Button type="submit">Add</Button>
  </Form>
}

export default ToDoInput;
