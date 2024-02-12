import React, { useEffect, useState } from "react";
import EditTodo from "./EdittoDO";

 

const ListToDos = ()=>{

const [todos, setTodos]= useState([])

//delete 

const deleteTodo= async (id)=>{
try {
   const deleteTodo = await fetch(`https://midterm-practice-app.onrender.com/danger/${id}`, {
    "method": "DELETE"
   })

   setTodos(todos.filter(todo => todo.id !== id ))

} catch (error) {
  console.error(error.message)
}
}

const getTodos = async ()=>{
  try {

    const response = await fetch("https://midterm-practice-app.onrender.com/alldata")
    const jsonData = await response.json()

    setTodos(jsonData)

  } catch (error) {
    console.error(error.message)
  }
}

useEffect(()=>{
  getTodos()
},[])

    return (
        <>
        <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo =>(
        <tr key = {todo.id}>
          <td>{todo.description}</td>
          <td><EditTodo todo={ todo }/></td>
          <td><button 
          className="btn btn-danger" onClick={()=> deleteTodo(todo.id)}>delete</button>
          </td>
        </tr>
      ))}
      
    </tbody>
  </table>
        </>
    )
}

export default ListToDos 