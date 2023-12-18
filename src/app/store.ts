import { configureStore } from '@reduxjs/toolkit';
import { tasksItemReducer } from '../components/Tasks/tasksItemSlice.ts';
import { tasksReducer } from '../components/Tasks/tasksSlice.ts';

export const store = configureStore({
  reducer: {
    tasksItem: tasksItemReducer,
    tasks: tasksReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
