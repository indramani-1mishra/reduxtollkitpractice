import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, UpdateTodo } from "../../store/Store";
import './TodoList.css';
import { MdDeleteOutline, MdEdit } from "react-icons/md";

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
    <div className="list">
      <ul>
       {todos.map((todo)=>
       <li key={todo.id}>{todo.text}
         <p> <button onClick={()=>onClickHandler1(todo.id)} ><MdEdit/></button>
         <button onClick={()=>onClickHandler(todo.id)}><MdDeleteOutline /></button></p>
       </li>)}
      </ul>
    </div>
  )
}
