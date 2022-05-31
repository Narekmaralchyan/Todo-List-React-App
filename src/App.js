import {useState} from 'react'
import TodoFooter from './Components/TodoFooter';
import TodoForm from './Components/TodoForm';
import ToDoList from './Components/ToDoList';
import './App.css'


function App() {

  const [toDos,setToDos] =useState(
    [])

  return (
    <div className="App">
      <h1>toDos</h1>
      <TodoForm 
      
      onAdd={(text)=>{
        setToDos([...toDos,
          {
          id:Math.random(),
          text:text,
          isCompleted:false,
        }])
      }}
      
      
      />
      <ToDoList 
        todos={toDos} 
        deleteItem={(id)=>{
        setToDos(toDos.filter((item)=>{
          if(item.id!=id) return item;
        }))
      }}
      onchange={(id,value)=>{
        setToDos(toDos.map(item=>{
          if(item.id!=id) return item;
          else {
             item.isCompleted=value
            return item
          }
        }))
      }}
      />
      <TodoFooter list={toDos} clear={
        ()=>{
          setToDos(toDos.filter(item=>{
            if(item.isCompleted===false) return item
          }))
        }
      } />
      
    </div>
  );
}

export default App;
