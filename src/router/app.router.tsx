import { TaskForm } from '@components/TaskForm';
import { AppLayout } from '@layouts/AppLayout';
import { HomePage } from '@pages/Home/HomePage';
import { createBrowserRouter, Navigate } from 'react-router';

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'create',
          element: <TaskForm />,
        },
        {
          path: 'edit/:id',
          element: <TaskForm />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);
