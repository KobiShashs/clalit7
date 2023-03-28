// This is store.ts file
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './TaskAppState';
import { themeReducer } from './ThemeAppState';


// This is rootReducer
const rootReducer = {
    tasksReducer: tasksReducer,
    // add more reducers here if needed
    themeReducer:themeReducer
};

// This is store object
const store = configureStore({
    reducer: rootReducer,
});

// Export root Application State
export type RootState = ReturnType<typeof store.getState>;


// Export store object
export default store;