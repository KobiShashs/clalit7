//This is TaksAppState.ts file
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../Models/Theme';

//This is the Contract
interface ThemeState {
    theme: Theme;
}

//This is the initialized Task Application State - initialize within empty array
const initialState: ThemeState = {
    theme: 'light-mode',
};

//These are all possible actions
export enum ActionType {
    TOGGLE_THEME = "TOGGLE_THEME",
}

//This is tasksSlice
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
        },

    },
});

//This is the exported tasks
export const {
    toggleTheme,

} = themeSlice.actions;


//Export the reducer
export const themeReducer = themeSlice.reducer;