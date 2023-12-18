import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import axiosApi from '../../axiosApi.ts';
import { tasksState } from './tasksSlice.ts';

export const fetchTasks = createAsyncThunk<
  void,
  undefined,
  { state: RootState }
>('tasks/fetch', async (_arg, thunkAPI) => {
  try {
    const response = await axiosApi.get('tasks.json');
    if (response.data !== null) {
      const newTasks = Object.keys(response.data).map((id) => ({
        id,
        ...response.data[id],
      }));
      thunkAPI.dispatch(tasksState.actions.addTasks(newTasks));
    }
  } catch (error) {
    console.log('Caught on try - FETCH TASKS - ', error);
  }
});

export const updateTaskStatus = createAsyncThunk<
  void,
  string,
  { state: RootState }
>('taskItem/changeStatus', async (arg, thunkAPI) => {
  try {
    const currentState = thunkAPI.getState().tasks;
    const taskToUpdate = currentState.tasks.find((item) => item.id === arg);

    if (taskToUpdate) {
      const status = taskToUpdate.status;
      await axiosApi.put(`tasks/${arg}.json`, { status });
    }
  } catch (error) {
    console.log('Caught on try - CHANGE TASK STATUS - ', error);
  }
});
