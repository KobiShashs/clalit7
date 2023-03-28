import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Menu from './Components/Layout/Menu/Menu';
import Main from './Components/Layout/Main/Main';
import Footer from './Components/Layout/Footer/Footer';
import { Theme } from './Models/Theme';
import { useSelector } from 'react-redux';
import store, { RootState } from './Redux/Store';

function App() {
    // const [theme, setTheme] = useState<Theme>('light-mode');
    const theme = useSelector((store: RootState) => store.themeReducer.theme);

    // const changeTheme = () => {
    //     if (theme === 'light-mode') {
    //         setTheme('dark-mode');
    //     } else {
    //         setTheme('light-mode');
    //     }
    // }

    return (
        <div className={`App ${theme}`}>
            <Header />
            <Menu />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
