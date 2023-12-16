import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToDoState {
  title: string;
  status: boolean;
}
const initialState: ToDoState = {
  title: '',
  status: false,
};

export const todoSlice = createSlice({
  name: 'todo',
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

export const todoReducer = todoSlice.reducer;
export const { addTitle, changeStatus } = todoSlice.actions;
