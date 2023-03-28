import { useEffect, useState } from "react";
import "./TotalTasks.css";
import axios from "axios";
import urlService from "../../../Services/UrlService";
import store, { RootState } from "../../../Redux/Store";
import { Root } from "react-dom/client";
import { useSelector } from "react-redux";

function TotalTasks(): JSX.Element {


    // const [total, setTotal] = useState<number>(store.getState().tasksReducer.tasks.length);
    const total = useSelector((store: RootState) => store.tasksReducer.tasks.length)

    //Mounting ~ componentDidMount
    // useEffect(() => {
    //     axios.get(urlService.urls.tasks + "/count")
    //         .then(res => setTotal(res.data))
    //         .catch(err => console.log(err));
    // }, []);


    return (
        <div className="TotalTasks">
            {(total) ? <p>Total : {total}</p> : <p>No Tasks for you</p>}
        </div>
    );
}

export default TotalTasks;
