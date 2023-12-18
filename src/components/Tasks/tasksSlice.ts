import { TasksItemState } from './tasksItemSlice.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasks } from './tasksThunks.ts';

export interface TasksState {
  tasks: TasksItemState[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

export const tasksState = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<TasksItemState[]>) => {
      return {
        ...state,
        tasks: action.payload,
      };
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const newState = [...state.tasks];
      const id = action.payload;
      return {
        ...state,
        tasks: newState.filter((task) => task.id !== id),
      };
    },
    changeTaskStatus: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tasks = state.tasks.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTasks.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const tasksReducer = tasksState.reducer;
export const { addTasks, removeTask, changeTaskStatus } = tasksState.actions;
