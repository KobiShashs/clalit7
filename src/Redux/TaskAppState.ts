import { TaskModel } from './../Models/TaskModel';
//This is TaskAppState.ts file
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// This is the Contract
interface TasksState {
    tasks: TaskModel[];
}

// Initial Application State
const initialState: TasksState = {
    tasks: [],
};

//These are all possible actions
export enum ActionType {
    GOT_ALL_TASKS = "GOT_ALL_TASKS",
    ADDED_TASK = "ADDED_TASK",
    DELETED_TASK = "DELETED_TASK",
}

//This is tasksSlice
const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
      gotAllTasksAction(state, action: PayloadAction<TaskModel[]>) {
        state.tasks = action.payload;
      },

      addedTaskAction(state, action: PayloadAction<TaskModel>) {
        state.tasks.push(action.payload);
      },

      deletedTaskAction(state, action: PayloadAction<number>) {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      },

    },
});


//This is the exported tasks
export const {
    gotAllTasksAction,
    addedTaskAction,
    deletedTaskAction,
  } = tasksSlice.actions;

//Export the reducer
export const tasksReducer = tasksSlice.reducer;