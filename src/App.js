import React, { useState } from 'react';
import './App.css';
import TaskList from './component/TaskList';
import AddTask from './component/AddTask';

function App() {
  const [tasks,setTasks] = useState([]);
  const [input,setInput] = useState('');

  const addTask =()=>{
    if(input.trim()!==''){
      const newTask = {id:Date.now(),text:input,isMandatory:false};
      let updatedTasks =[...tasks];
      if(updatedTasks.length && updatedTasks[updatedTasks.length-1].isMandatory){
        updatedTasks.splice(updatedTasks.length-1,0,newTask);
      }else{
        updatedTasks.push(newTask);
      }
      setTasks(updatedTasks)
      setInput('');
    }
  };

  const updateTask =(id,newText) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        return {...task,text:newText};
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const deleteTask = (id) =>{
      const updatedTasks =tasks.filter(task => task.id !==id);
      if(updatedTasks.length<1){
        alert("Remainder, this task is mandatory");
        return;
        // updatedTasks[updatedTasks.length-1].isMandatory =true;
      }
      setTasks(updatedTasks);
  };

  return (
    <div className='App'>
      <h1>ToDo App</h1>
      <AddTask input={input} setInput={setInput} onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
}

export default App;
