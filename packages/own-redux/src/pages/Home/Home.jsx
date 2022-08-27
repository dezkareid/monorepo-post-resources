import ToDoInput from './containers/TodoInput';
import ToDoList from './containers/TodoList';

function Home() {
  console.log('home')
  return (
    <section>
      <ToDoInput />
      <ToDoList />      
    </section>
  )
}

export default Home;