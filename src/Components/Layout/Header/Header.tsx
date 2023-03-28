import ToggleTheme from "../../Shared/ToggleTheme/ToggleTheme";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header center">
            <span>🐈</span>
            <h1>Todo App</h1>
            <ToggleTheme/>
        </div>
    );
}

export default Header;
