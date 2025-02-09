
import './App.css'
import AddTodo from './component/Addtodo/AddTodo';
import TodoList from './component/TodoList/TodoList';

function App() {
 

  return(
  <div className='itemcontainer'>
     <AddTodo/>
     <TodoList />
  </div>
  );
}

export default App
