import { useEffect, useState } from "react";
import "./TotalTasks.css";
import axios from "axios";

function TotalTasks(): JSX.Element {
    const url = "http://localhost:8080/api/tasks/count";
    const [total, setTotal] = useState<number>(0);

    //Mounting ~ componentDidMount
    useEffect(() => {
        axios.get(url)
            .then(res=>setTotal(res.data))
            .catch(err => console.log(err));
    }, []);


    return (
        <div className="TotalTasks">
            {(total) ? <p>Total : {total}</p> : <p>No Tasks for you</p>}
        </div>
    );
}

export default TotalTasks;
