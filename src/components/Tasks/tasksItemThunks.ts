import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import axiosApi from "../../axiosApi.ts";

export const addTask = createAsyncThunk<void, undefined, {state: RootState}>(
    'tasksItem/add', async (_arg, thunkAPI)=>{
      const currentValue = thunkAPI.getState().tasksItem.title
      await axiosApi.post('tasks.json', currentValue)
    }
)