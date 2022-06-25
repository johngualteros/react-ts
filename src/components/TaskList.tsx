import { Task } from "../Interfaces/Task";
import { TaskCard } from "./TaskCard";

interface Props{
    tasks: Task[];
    deleteTask:(id:number) => void;
}
export const TaskList=({tasks,deleteTask}:Props)=>{
    return(
        <>
        {
            tasks.map(task=>(
                <TaskCard task={task} deleteTask={deleteTask}/>
            ))
        }
        </>
    )
}