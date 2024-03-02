import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
export default function Tododisplay({todoArray,setTodoArray}) {
  
  function setCross(e){
    e.stopPropagation();
    e.target.parentNode.classList.toggle('checked')
    // console.log(e.target.parentNode.parentNode.childNodes[0].innerText)
  }
  function delItems(e){
    e.stopPropagation(); 
    const newtd=todoArray.filter((values)=>(values!=(e.target.parentNode.parentNode.childNodes[0].innerText)))  
    
    setTodoArray(newtd)
    
  }
 
  return (
      <ul style={{listStyleType:'none', border:"2px solid,black",width:"100vw",height:"fit-content"}}>
       {
       todoArray.map((value,index)=>(
      <li key={index} style={{width:"100vw",height:"5vh",border:"5px solid green",padding:"5px",margin:"5px"}}>
        <span style={{height:"0 5vh0 0", padding:"0 10vw",backgroundColor:"grey"}}>{value}
        </span>
        <span onClick={(e)=>setCross(e)}><TiTick style={{height:"100%", padding:"0 10vw"}}/></span>
        <span onClick={(e)=>delItems(e)}><MdDeleteForever  style={{height:"100%",padding:"0 10vw"}} /></span>
      </li>))
}
      
      </ul>
      
    )
  
    
}
