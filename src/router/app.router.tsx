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
