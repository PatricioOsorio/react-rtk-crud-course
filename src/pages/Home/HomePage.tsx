import { TaskForm } from "@components/TaskForm";
import { TaskList } from '@components/TaskList';

export const HomePage = () => {
  return (
    <article>
      <h1 className="tit">HomePage</h1>

      <TaskForm />

      <TaskList />
    </article>
  );
};
