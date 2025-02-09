import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../../store/Store";
import './Addtodo.css';


export default function AddTodo() {
    const dispatch =useDispatch();
    const [input,SetInput]= useState("");
    const submitHandler=(e)=>
    {
        e.preventDefault();
        if(input.trim())
        {
            dispatch(addTodo(input)) 
            console.log("Todo added", input);
            SetInput("");

        }

    }

  return (
    <form className="from1">
      <input type="text"
        placeholder="Add a todo..."
        value={input}
        onChange={(e) => SetInput(e.target.value)}
      />
      <button type="submit" onClick={submitHandler} >ADD Todo</button>
    </form>
  )
}
