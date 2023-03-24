import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			{/* <a href="home">Home</a>
			<a href="tasks">All Tasks</a>
			<a href="tasks/add">Add Task</a>
			<a href="about">About</a> */}

            <Link to="home">Home</Link>
            <Link to="tasks">All Tasks</Link>
            <Link to="tasks/add">Add Task</Link>
            <Link to="about">About</Link>
        </div>
    );
}

export default Menu;
