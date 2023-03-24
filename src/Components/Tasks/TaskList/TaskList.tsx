import { useEffect, useState } from "react";
import "./TaskList.css";
import axios from "axios";
import { TaskModel } from "../../../Models/TaskModel";
import TaskCard from "../TaskCard/TaskCard";

function TaskList(): JSX.Element {
    const url = "http://localhost:8080/api/tasks";
    const [tasks, setTasks] = useState<TaskModel[]>([]);

    //Mounting ~ componentDidMount
    useEffect(() => {
        axios.get<TaskModel[]>(url)
            .then(res => setTasks(res.data))
            .catch(err => console.log('Oppsy'));
    }, []);
    return (
        <div className="TaskList">
            <div className="center">
                <h1>Task List</h1>
            </div>
            <div className="displayList">
                {
                    tasks.map(t =>
                        <TaskCard
                            key={'task ' + t.id}
                            task={t} />
                    )

                }
            </div>

        </div>
    );
}

export default TaskList;
