import { createSlice } from '@reduxjs/toolkit';

export interface ITaskState {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const initialState: ITaskState[] = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;
