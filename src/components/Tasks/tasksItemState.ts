import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TasksItemState {
  title: string;
  status: boolean;
}
const initialState: TasksItemState = {
  title: '',
  status: false,
};

export const tasksItemState = createSlice({
  name: 'tasksItem',
  initialState,
  reducers: {
    addTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    changeStatus: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export const tasksItemReducer = tasksItemState.reducer;
export const { addTitle, changeStatus } = tasksItemState.actions;
