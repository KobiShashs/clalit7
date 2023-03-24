import moment from "moment";
import { TaskModel } from "../../../Models/TaskModel";
import "./TaskCard.css";

interface TasksCardProps{
    task:TaskModel
}
function TaskCard(props:TasksCardProps): JSX.Element {
    return (
        <div className="TaskCard box">
            <p>{props.task.id}</p>
            <p>{props.task.title}</p>
            <p>{props.task.description}</p>
            <p>{props.task.group}</p>
            <p>{moment( props.task.when).format("DD/MM/YYYY")}</p>
            <p>{moment( props.task.when).format("hh:mm:ss")}</p>
        </div>
    );
}

export default TaskCard;
