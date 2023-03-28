import { useState } from "react";
import "./ToggleTheme.css";
import { Theme } from "../../../Models/Theme";
import store from "../../../Redux/Store";
import { toggleTheme } from "../../../Redux/ThemeAppState";
import { useDispatch } from "react-redux";

function ToggleTheme(): JSX.Element {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState<Theme>(store.getState().themeReducer.theme);

    const changeTheme = () => {
        if (theme === 'light-mode') {
            setTheme('dark-mode');
        } else {
            setTheme('light-mode');
        }

        // store.dispatch(toggleTheme(theme));
        dispatch(toggleTheme(theme));
    }
    return (
        <div className="ToggleTheme">
			<button onClick={changeTheme}>{(theme==='light-mode'?'go dark':'go light')}</button>
        </div>
    );
}

export default ToggleTheme;
