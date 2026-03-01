import { useDispatch, useSelector } from 'react-redux';

import { TaskItem } from './TaskItem';
import type { IRootState } from '@app/store';
import { deleteTask, type ITaskState } from '@features/tasks/taskSlice';

export const TaskList = () => {
  const tasks = useSelector<IRootState, ITaskState[]>((state) => state.tasks);
  const payload = useDispatch();

  const handleDelete = (id: number) => {
    payload(deleteTask(id));
  };

  return (
    <section>
      <h2>Total: {tasks.length}</h2>
      <ul className="list bg-base-100 rounded-box border-base-300 gap-3 border shadow-lg">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} onDelete={() => handleDelete(task.id)} />
        ))}
      </ul>
    </section>
  );
};
