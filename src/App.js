
import './App.css';

import Todoform from './components/Todoform';
import Tododisplay from './components/Tododisplay';

import {useState} from 'react'


function App() {
  const[todoItem,setTodoItems]=useState("");
  const[todoArray,setTodoArray]=useState([]);
  const [taskMessage,setTaskMessage]=useState("")
  function setItem(e){
    
    setTodoItems(e.target.value.toUpperCase())
    
  }
  function submitItem(){
    if(!todoItem) return;
    const newTodoArray=[...todoArray,todoItem];
    setTodoArray(newTodoArray);
    setTodoItems("");
    setTaskMessage("");
  }
  return (
    <div className="App">
      
      
      <Todoform setItem={setItem} submitItem={submitItem} todoItem={todoItem}/>
      <br/>
      <br/>
     
      
      <Tododisplay todoArray={todoArray} setTodoArray={setTodoArray} taskMessage={taskMessage} setTaskMessage={setTaskMessage}/>
    </div>
  );
}

export default App;
