import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '@features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
