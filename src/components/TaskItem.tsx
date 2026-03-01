import type { ITaskState } from '@features/tasks/taskSlice';

export interface ITaskItemProps extends ITaskState {
  onDelete: () => void;
}

export const TaskItem = ({ title, description, completed, onDelete }: ITaskItemProps) => {
  return (
    <li className="list-row">
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span>{description}</span>
      </div>
      <div className="flex items-center">
        <input type="checkbox" checked={completed} readOnly className="checkbox" />
      </div>
      <div>
        <button className="btn btn-sm btn-error" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};
