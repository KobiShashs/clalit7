import "./AddTask.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TaskModel } from "../../../Models/TaskModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddTask(): JSX.Element {

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
                .typeError("You must specify task date")
                .required("When is required")
                .nullable().default(() => new Date()),


    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<TaskModel>({ mode: "all", resolver: yupResolver(schema) });

    const sendTaskToRemoteServer = (task: TaskModel) => {
        const url = "http://localhost:8080/api/tasks";
        axios.post(url, task)
            .then(res => {
                console.log("Great Job!!1 Added successfully");
                // Navigate to previous screen
                navigate('/tasks');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="AddTask">
            <h1>Add new Task</h1>

            <form onSubmit={handleSubmit(sendTaskToRemoteServer)}>
                {errors?.title && <span>{errors?.title?.message}</span>}
                <input {...register("title")} type="text" placeholder="Title..." />

                {errors?.description && <span>{errors?.description?.message}</span>}
                <input {...register("description")} type="text" placeholder="description..." />

                {errors?.group && <span>{errors?.group?.message}</span>}
                <input {...register("group")} type="text" placeholder="group..." />

                {errors?.when && <span>{errors?.when?.message}</span>}
                <input {...register("when")} type="datetime-local" placeholder="when..." />

                <button  disabled={!isValid}>Yalla Dov Kouala</button>
            </form>
        </div>
    );
}

export default AddTask;
