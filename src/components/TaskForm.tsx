import {ChangeEvent, FormEvent, useState} from 'react';
import { Task } from '../Interfaces/Task';
interface Props{
    newTask: (task:Task)=>void;
}
type HandleInputChange=ChangeEvent<HTMLInputElement|HTMLTextAreaElement>;
export const TaskForm=({newTask}:Props)=>{
    const initialState={
        title:"",
        description:"",
    };
    const [task, setTask] = useState(initialState);
    const handleInputChange=({target:{name,value}}:HandleInputChange)=>{
        setTask({...task,[name]:value});
    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        newTask(task);
        setTask(initialState);
    }
    return(
        <div className="card card-body bg-light text-dark">
            <h1>Add task</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={task.title} name="title" onChange={handleInputChange} placeholder="Enter Title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" value={task.description} name="description" onChange={handleInputChange} placeholder="Enter Description" rows={2}></textarea>
                </div>
                <button className="btn bg-info w-100 btn-info">save</button>
            </form>

        </div>
    )
}