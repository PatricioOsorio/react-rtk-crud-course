import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { store } from '@app/store';
import { appRouter } from '@router/app.router';

import './styles/app.css';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};
