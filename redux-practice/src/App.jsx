import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./features/TODO/todoSlice";

const App = ()=>{
    const [text,setText] = useState('');
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();

    const handleAdd = ()=>{
      if(text.trim()){
        dispatch(addTodo(text));
        setText('');
      }
    };
    
  return(
    <div className="flex justify-center flex-col bg-amber-100 p-5 border-1">

      <h1 className="bg-amber-600 flex-wrap">Redux Toolkit Todo</h1>
      <input className="bg-green-500 mt-5" type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter todo..."/>

      <button className="bg-blue-800  mt-5 border-2" onClick={handleAdd}>Add TODO</button>

      <ul className="mt-5 flex flex-col justify-center bg-amber-700">
        {todos.map((todo)=> (
          <li className="flex justify-center mt-2">
            <span onClick={()=> dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button className="ml-5" onClick={()=> dispatch(deleteTodo(todo.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
