import { useEffect, useState } from "react";
import "./TaskList.css";
import axios from "axios";
import { TaskModel } from "../../../Models/TaskModel";
import TaskCard from "../TaskCard/TaskCard";
import urlService from "../../../Services/UrlService";
import notifyService from "../../../Services/NotifcationService";
import store from "../../../Redux/Store";
import { gotAllTasksAction } from "../../../Redux/TaskAppState";
import { useDispatch } from "react-redux";//@@@@@@@@@@@@

function TaskList(): JSX.Element {

    const dispatch = useDispatch();//@@@@@@@@@@@@
    const [tasks, setTasks] = useState<TaskModel[]>(store.getState().tasksReducer.tasks);

    //Mounting ~ componentDidMount
    useEffect(() => {
        if (tasks?.length === 0) {

            axios.get<TaskModel[]>(urlService.urls.tasks)
            .then(res => {
                setTasks(res.data);
                //store.dispatch(gotAllTasksAction(res.data));
                dispatch(gotAllTasksAction(res.data));//@@@@@@@@@@@@
                notifyService.success('WOho!!!')
            })
            .catch(err => notifyService.error(err));

        }
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
