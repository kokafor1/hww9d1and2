import TaskCard from "./TaskCard";
import { Task } from "./types";

type TaskCardProps = {
    tasks: Task[];
};

export default function Todo({tasks}: TaskCardProps) {
    return (
        <>
            {tasks.map((t) => (
                <TaskCard task={t}/>
            ))}
        </>
    );
}