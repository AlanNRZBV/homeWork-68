import { configureStore } from '@reduxjs/toolkit';
import { tasksItemReducer } from '../components/Tasks/tasksItemState.ts';

export const store = configureStore({
  reducer: {
    tasksItem: tasksItemReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
