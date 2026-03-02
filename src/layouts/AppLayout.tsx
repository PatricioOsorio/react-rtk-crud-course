import { Link, Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <article>
      <nav className="navbar bg-base-100 mb-6 shadow-lg">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl normal-case">Task Tracker</a>
        </div>
        <div className="navbar-end gap-4">
          <Link className="btn" to="/" viewTransition>
            Home
          </Link>
        </div>
      </nav>

      <Outlet />
    </article>
  );
};
