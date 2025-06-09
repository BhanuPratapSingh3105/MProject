import { createSlice } from "@reduxjs/toolkit";
const initialState = {
task:[
	{
		id: 1, 
		title: "View React Lectures",
		body: "Learn from Chapter 1 to Chapter 12",
		isDone: false
	},
	{ 
		id: 2, 
		title: "Eat lunch",
		body: "What's for lunch...?",
		isDone: false
	}
]
};
export const taskReducer = createSlice({
    name:"task",
    initialState: initialState,
    reducers:{
        addTask(state,action){
            state.task.push(action.payload);
        },
        // deleteTask(state,action){
        //     state.task = state.task.filter((curTask,index)=>{
        //         index != action.payload;
        //     })
        // },
         deleteTask: (state, action) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
        updateTask: (state, action) => {
      const index = state.task.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.task[index] = {
          ...state.task[index],
          title: action.payload.title,
          body: action.payload.body
        };
      }
    }
    }
})
export const {addTask , deleteTask, updateTask} = taskReducer.actions;