import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";

export default function Tododisplay({todoArray,setTodoArray}) {

  function setCross(e){
    
    e.stopPropagation();
    let nodeval=""
     if(e.target.parentNode.nodeName==="SPAN"){
      nodeval=e.target.parentNode.parentNode
     }
     else if(e.target.parentNode.nodeName==="svg"){
      nodeval=e.target.parentNode.parentNode.parentNode
     }
     else{
      nodeval=e.target.parentNode
     }
    nodeval.classList.toggle('checked')
   
  }
  function delItems(e){
    e.stopPropagation(); 
    let nodeval=""
    if(e.target.parentNode.nodeName==="SPAN"){
      nodeval=e.target.parentNode.parentNode
    }
    else if(e.target.parentNode.nodeName==="svg"){
      nodeval=e.target.parentNode.parentNode.parentNode
    }
    else{
      nodeval=e.target.parentNode
    }
    console.log(nodeval)
    const newtdarr=todoArray.filter((value,id)=>(value.id!==(nodeval.id)));
    setTodoArray(newtdarr) 
  }
 
  return (
      <ul style={{display:"flex",flexDirection:"column",width:"100vw",margin:"5%"}} >
       {
       todoArray.map((value,index)=>(
          <li key={index} id={value.id} style={{display:"flex",flexDirection:"row",border:"1px solid grey",width:"100vw",height:"8vh",justifyContent:"space-between",textAlign:"right",alignContent:"end",marginBottom:"1vh",borderRadius:"5px"}}>

              <span style={{width:"90vw", border:"1px solid grey",height:"8vh",padding:"2vh 0",fontSize:"large",fontWeight:"Bold",color:"Green",fontFamily:"sans-serif"}}>{value.value}</span>

              <span onClick={(e)=>setCross(e)} style={{width:"5vw",height:"8vh",padding:"2vh 0"}}><TiTick     style={{height:"8vh",color:"magenta",fontWeight: "bolder",
              fontSize: "xx-large"}}  /></span>
              
              <span  onClick={(e)=>delItems(e)} style={{width:"5vw",height:"8vh",padding:"2vh 0"}}><MdDeleteForever style={{height:"8vh",color:"red",fontWeight: "bolder",
              fontSize: "xx-large"}}/></span>

          </li>))
        }
      </ul>
    )
}
