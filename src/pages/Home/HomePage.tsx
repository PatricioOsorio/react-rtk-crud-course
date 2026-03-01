import { TaskForm } from '@components/TaskForm';
import { TaskList } from '@components/TaskList';

export const HomePage = () => {
  return (
    <article className="page">
      <h1 className="tit">HomePage</h1>

      <section className="grid gap-6 md:grid-cols-2">
        <TaskForm />
        <TaskList />
      </section>
    </article>
  );
};
