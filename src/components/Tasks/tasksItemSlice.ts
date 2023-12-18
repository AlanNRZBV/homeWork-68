import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TasksItemState {
  title: string;
  status: boolean;
  id: string;
}
const initialState: TasksItemState = {
  title: '',
  status: false,
  id: '',
};

export const tasksItemState = createSlice({
  name: 'tasksItem',
  initialState,
  reducers: {
    addTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    resetTitle: (state) => {
      state.title = '';
    },
  },
});

export const tasksItemReducer = tasksItemState.reducer;
export const { addTitle, resetTitle } = tasksItemState.actions;
