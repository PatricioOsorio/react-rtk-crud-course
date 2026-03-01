import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <article>
      <div>navbar</div>
      <Outlet />
    </article>
  );
};
