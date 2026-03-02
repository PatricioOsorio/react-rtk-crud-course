import { useSearchParams } from 'react-router';

import { TaskForm } from '@components/TaskForm';
import { TaskList } from '@components/TaskList';

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const formKey = searchParams.get('id') ?? 'new';

  return (
    <article className="page">
      <h1>HomePage</h1>

      <section className="grid gap-6 md:grid-cols-2">
        <TaskForm key={formKey} />
        <TaskList />
      </section>
    </article>
  );
};
