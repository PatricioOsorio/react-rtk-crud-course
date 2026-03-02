import type { ITaskState } from '@features/tasks/taskSlice';

export interface ITaskItemProps extends ITaskState {
  onDelete: () => void;
  onEdit?: () => void;
}

export const TaskItem = ({ title, description, completed, onDelete, onEdit }: ITaskItemProps) => {
  return (
    <li className="list-row">
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span>{description}</span>
      </div>
      <div className="flex items-center">
        <input type="checkbox" checked={completed} readOnly className="checkbox" />
      </div>
      <div className="flex gap-3">
        <button className="btn btn-sm btn-error" onClick={onDelete}>
          Delete
        </button>
        <button className="btn btn-sm btn-primary" onClick={onEdit}>
          Edit
        </button>
      </div>
    </li>
  );
};
