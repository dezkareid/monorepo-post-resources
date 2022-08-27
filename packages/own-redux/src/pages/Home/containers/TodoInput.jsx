import { useState } from "react";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";

function ToDoInput({ onSubmit }) {
  const [input, setInput] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    onSubmit(input);
  };

  const onChangeHandler = event => {
    const { value } = event.target;
    setInput(value);
  };

  return <Form onSubmit={onSubmitHandler}>
    <div>
      <Input labelText="To do: " value={input} onChange={onChangeHandler} />
    </div>
    <Button type="submit">Add</Button>
  </Form>
}

export default ToDoInput;
