
import './App.css';
import Header1 from './components/Header1';
import Todoform from './components/Todoform';
import Tododisplay from './components/Tododisplay';

import {useState} from 'react'


function App() {
  const[todoItem,setTodoItems]=useState("");
  const[todoArray,setTodoArray]=useState([]);
  function setItem(e){
    setTodoItems(e.target.value.toUpperCase())
    
  }
  function submitItem(){
    const newTodoArray=[...todoArray,todoItem];
    setTodoArray(newTodoArray);
    setTodoItems("");
  }
  return (
    <div className="App">
      <Header1/>
      <Todoform setItem={setItem} submitItem={submitItem} todoItem={todoItem}/>
      <Tododisplay todoArray={todoArray} setTodoArray={setTodoArray}/>
    </div>
  );
}

export default App;
