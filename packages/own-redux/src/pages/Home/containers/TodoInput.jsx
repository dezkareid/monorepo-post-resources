import Button from '../../../components/Button';
import Form from '../../../components/Form';
import Input from '../../../components/Input';
import useDispatch from '../../../hooks/useDispatch';
import useInput from '../../../hooks/useInput';
import { addTodo, setInput } from '../../../store/actions';

function ToDoInput() {
  const input = useInput();
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
