import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import About from "../../Pages/About/About";
import TaskList from "../../Tasks/TaskList/TaskList";
import AddTask from "../../Tasks/AddTask/AddTask";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="home" element={<Home/>}/>
                <Route path="tasks" element={<TaskList/>}/>
                <Route path="tasks/add" element={<AddTask/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
