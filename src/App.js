import { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = ()=>{
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);
  const changeHandler = e =>{
    setTask(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault(); 
      const newTodos = task.length?[...todos,task]: [...todos];
      setTodos(newTodos);
      setTask("");
  }
 const writehandler = ()=>{
  
 }
  const deletehandler = (indexvalue) =>{
    const newTodos = todos.filter((todo,index)=>
    index!== indexvalue);
    console.log(newTodos)
    setTodos(newTodos);
  }
return(
<div className='App'>
  <h2>Task management Application</h2>
 <div className='input-field'>
<form onSubmit={submitHandler}>

  <input
    placeholder='Add to Task' value={task} onChange={changeHandler} className="nothin"/>
    &nbsp;
    <button value='Add' name='Add' onClick={submitHandler}>Add</button>
  </form>
 
 </div>
   
 <div className='display'>
 <TodoList todolist={todos} deletehandler={deletehandler} writehandler={writehandler}/>
 </div>
 
</div>
)
}
export default App;
