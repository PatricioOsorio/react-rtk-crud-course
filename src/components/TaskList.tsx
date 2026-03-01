import { useSelector } from 'react-redux';

import { TaskItem } from './TaskItem';
import type { IRootState } from '@app/store';
import type { ITaskState } from '@features/tasks/taskSlice';

export const TaskList = () => {
  const tasks = useSelector<IRootState, ITaskState[]>((state) => state.tasks);

  return (
    <ul className="list bg-base-100 rounded-box shadow-lg gap-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
};
