import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import axiosApi from '../../axiosApi.ts';

export const postTask = createAsyncThunk<void, undefined, { state: RootState }>(
  'tasksItem/add',
  async (_arg, thunkAPI) => {
    try {
      const newTask = {
        title: thunkAPI.getState().tasksItem.title,
        status: thunkAPI.getState().tasksItem.status,
      };
      await axiosApi.post('tasks.json', newTask);
    } catch (error) {
      console.log('Caught on try - POST TASK - ', error);
    }
  },
);

export const deleteTask = createAsyncThunk<void, string, { state: RootState }>(
  'tasksItem/delete',
  async (arg) => {
    try {
      await axiosApi.delete(`tasks/${arg}.json`);
    } catch (error) {
      console.log('Caught on try - DELETE TASK - ', error);
    }
  },
);
