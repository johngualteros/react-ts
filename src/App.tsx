import {useState} from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Task } from './Interfaces/Task';

function App() {

  const[tasks,setTasks]=useState<Task[]>([
    {
    id:1,
    title:"Learn React",
    description:"This is a description",
    completed: false
    },
  ]);
  const getCurrentTime=():number=>new Date().getTime();
  const newTask=(task:Task)=>{
    setTasks([...tasks,{...task,id:getCurrentTime(),completed:false}]);
  }
  const deleteTask=(id:number)=>{
    setTasks(tasks.filter(task=>task.id!==id));
  }

  return (
    <div className="container bg-dark p-5 m-5 shadow-xl rounded">
      <div className="row">
        <div className="col-md-4">
          <TaskForm newTask={newTask}/>
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={tasks} deleteTask={deleteTask}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
