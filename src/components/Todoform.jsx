import React from 'react'


export default function Todoform({setItem,submitItem,todoItem}) {
  
  return (
  <form>
    <h1>Todo List</h1>
    <input 
    type="text" 
    style={{height:"5vh",padding:"0 auto ",textAlign:"center"}}
    value={todoItem} 
    placeholder="Enter your todo item here"
    onChange={(e)=>setItem(e)}
    />
    <br/>
    <button onClick={submitItem}>Add Todo</button>
  </form>
  )
}
