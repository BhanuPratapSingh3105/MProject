import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../Modules/todoSlice"
export const store = configureStore({
    reducer:{
        taskReducer: taskReducer.reducer,
    },
})
