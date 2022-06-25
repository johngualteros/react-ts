import { Task } from "../Interfaces/Task"

interface Props{
    task:Task;
    deleteTask:(id:number) => void;
}
export const TaskCard=({task,deleteTask}:Props)=>{
    return(
        <div key={task.id} className="card card-body bg-light text-dark my-2">
            <div className="card-description fs-5 fw-bold">
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <p>{task.completed}</p>
                <button className="btn bg-warning btn-outline-warning btn-sm rounded text-dark" onClick={()=>deleteTask(task.id!)}>Delete</button>
            </div>
        </div>
    )
}