import {TasksItemState} from "./tasksItemState.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface TasksState extends TasksItemState {
  id:string
}

const initialState:TasksState[] = []

export const tasksState = createSlice({
  name:'tasks',
  initialState,
  reducers:{
    addTasks:(_state, action: PayloadAction)=>{
      return action.payload
    }
  }
})

export const tasksReducer = tasksState.reducer
export const {addTasks}=tasksState.actions