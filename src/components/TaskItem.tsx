import type { ITaskState } from '@features/tasks/taskSlice';

export const TaskItem = ({ title, description, completed }: ITaskState) => {
  return (
    <li className="list-row">
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span>{description}</span>
      </div>
      <div className="flex items-center">
        <input type="checkbox" checked={completed} readOnly className="checkbox" />
      </div>
    </li>
  );
};
