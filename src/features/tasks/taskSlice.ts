import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ITaskState {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

type IAddTaskPayload = Omit<ITaskState, 'id' | 'completed'>;

const initialState: ITaskState[] = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false },
  { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: true },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<IAddTaskPayload>) => {
      const newTask: ITaskState = {
        id: new Date().getTime(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };

      state.push(newTask);
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
