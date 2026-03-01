import { useSelector } from 'react-redux';

import type { IRootState } from '@app/store';
import { TaskForm } from '@components/TaskForm';
import { TaskList } from '@components/TaskList';

export const HomePage = () => {
  const tasksState = useSelector<IRootState>((state) => state.tasks);

  return (
    <article>
      <h1 className="tit">HomePage</h1>

      <TaskForm />

      <TaskList />
      
      <pre>
        <code> {JSON.stringify(tasksState)}</code>
      </pre>
    </article>
  );
};
