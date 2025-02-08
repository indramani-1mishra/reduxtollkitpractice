import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, UpdateTodo } from "../../store/Store";


export default function TodoList() {
    const todos = useSelector((state)=>state.todo)
    const dispatch = useDispatch();
    
    const onClickHandler = (id) => {
        dispatch(deleteTodo(id))
    }
   // In your component
const onClickHandler1 = (id) => {
    const text = prompt("Enter your updated todo text");
    if (text) {
      dispatch(UpdateTodo({ id, text })); // Correctly pass an object with both id and text
    }
  };
  
    console.log(todos);
  return (
    <div>
      <ul>
       {todos.map((todo)=>
       <li key={todo.id}>{todo.text}
       <button onClick={()=>onClickHandler1(todo.id)}>edit</button>
       <button onClick={()=>onClickHandler(todo.id)}>x</button>
       </li>)}
      </ul>
    </div>
  )
}
