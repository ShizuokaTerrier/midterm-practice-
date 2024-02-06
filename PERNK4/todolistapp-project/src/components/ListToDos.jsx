import React, { useEffect, useState } from "react";

const ListToDos = ()=>{

const [todos, setTodos]= useState([])

const getTodos = async ()=>{
  try {

    const response = await fetch("http://localhost:8050/alldata")
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
          <td>edit</td>
          <td>delete</td>
        </tr>
      ))}
      
    </tbody>
  </table>
        </>
    )
}

export default ListToDos 