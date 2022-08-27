import List from "../../../components/List";

function ToDoList({ list = [], onDelete }) {
  const listElements = list.map(({ id, text }) => (
    <li key={id}>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
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
