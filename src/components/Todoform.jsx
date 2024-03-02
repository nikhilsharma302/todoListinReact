import React from 'react'


export default function Todoform({setItem,submitItem,todoItem}) {
  return (<>
    <input type="text" value={todoItem} placeholder="Enter your todo item here" onChange={(e)=>setItem(e)}/>
    <button onClick={submitItem}>Submit</button>
    </>
  )
}
