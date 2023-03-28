import "./AddTask.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TaskModel } from "../../../Models/TaskModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import notifyService from "../../../Services/NotifcationService";
import { url } from "inspector";
import urlService from "../../../Services/UrlService";
import store from "../../../Redux/Store";
import { addedTaskAction } from "../../../Redux/TaskAppState";
import { useDispatch } from "react-redux";
function AddTask(): JSX.Element {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const schema = yup.object().shape({
        title:
            yup.string()
                .required("Title is required"),
        description:
            yup.string()
                .min(3, 'Description must be at least 3 characters')
                .max(30, 'Description must be at most 30 characters')
                .required("Description is required"),
        group:
            yup.string()
                .required("Group is required"),
        when:
            yup.date()
                .min(new Date(), 'Minimal Date Time is right now')
                .default(new Date())
                .required("When is required")
                .typeError("You must specify task date")
                .nullable().default(() => new Date()),


    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<TaskModel>({ mode: "all", resolver: yupResolver(schema) });

    const sendTaskToRemoteServer = (task: TaskModel) => {

        // axios.get(urlService.urls.tasks)
        axios.post(urlService.urls.tasks, task)
            .then(res => {
                notifyService.success('Added Task Successfully');
                console.log(res.data);
                // store.dispatch(addedTaskAction(res.data));
                dispatch(addedTaskAction(res.data));
                // Navigate to previous screen
                navigate('/tasks');
            })
            .catch(err => {
                console.log(err);
                notifyService.error('Unable to Add Task : ' + err);
            });
    }

    return (
        <div className="AddTask">
            <h1>Add new Task</h1>

            <form onSubmit={handleSubmit(sendTaskToRemoteServer)}>
                {(errors?.title) ? <span>{errors?.title?.message}</span> : <label>Title</label>}
                <input {...register("title")} type="text" placeholder="Title..." />

                {(errors?.description) ? <span>{errors?.description?.message}</span> : <label>Description</label>}
                <input {...register("description")} type="text" placeholder="description..." />

                {(errors?.group) ? <span>{errors?.group?.message}</span> : <label>Group</label>}
                <input {...register("group")} type="text" placeholder="group..." />

                {(errors?.when) ? <span>{errors?.when?.message}</span> : <label>When</label>}
                <input {...register("when")} type="datetime-local" placeholder="when..." />

                <button disabled={!isValid}>Yalla Dov Kouala</button>
            </form>
        </div>
    );
}

export default AddTask;
