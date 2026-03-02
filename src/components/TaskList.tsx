import { useDispatch, useSelector } from 'react-redux';

import { TaskItem } from './TaskItem';
import type { IRootState } from '@app/store';
import { deleteTask, type ITaskState } from '@features/tasks/taskSlice';
import { useNavigate } from 'react-router';

export const TaskList = () => {
  const tasks = useSelector<IRootState, ITaskState[]>((state) => state.tasks);
  const payload = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    payload(deleteTask(id));
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  return (
    <section>
      <h2>Total: {tasks.length}</h2>
      <ul className="list bg-base-100 rounded-box border-base-300 gap-3 border shadow-lg">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onDelete={() => handleDelete(task.id)}
            onEdit={() => handleEdit(task.id)}
          />
        ))}
      </ul>
    </section>
  );
};
