
import './App.css';

import Todoform from './components/Todoform';
import Tododisplay from './components/Tododisplay';
import {v4 as uuidv4} from 'uuid'

import {useState} from 'react'


function App() {
  const[todoItem,setTodoItems]=useState("");
  const[todoArray,setTodoArray]=useState([]);
  
  function setItem(e){  
   
    setTodoItems(e.target.value)
  }
  function submitItem(e){
    e.preventDefault();
    if(!todoItem) return alert("Todo Item cannot be empty");
    const item={
      value:todoItem,
      id:uuidv4()
    }
    const newTodoArray=[...todoArray,item];
    setTodoArray(newTodoArray);
    setTodoItems("");
    
  }
  return (
    <div className="App">
      
      
      <Todoform setItem={setItem} submitItem={submitItem} todoItem={todoItem}/>
      <br/>
      <br/>
     
      
      <Tododisplay todoArray={todoArray} setTodoArray={setTodoArray}/>
    </div>
  );
}

export default App;
