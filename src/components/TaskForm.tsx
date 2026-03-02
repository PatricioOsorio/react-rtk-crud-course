import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InputText } from './InputText';
import { InputTextArea } from './InputTextArea';
import { addTask, editTask, type ITaskState } from '@features/tasks/taskSlice';
import { useNavigate, useParams } from 'react-router';
import type { IRootState } from '@app/store';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const tasks = useSelector<IRootState, ITaskState[]>((state) => state.tasks);

  const isEdit = Boolean(params.id);
  const tasksFound = params.id ? tasks.find((t) => t.id === Number(params.id)) : undefined;

  const [task, setTask] = useState({
    title: tasksFound?.title || '',
    description: tasksFound?.description || '',
  });

  const handleChangeTask = (title: string, description: string) => {
    setTask((prev) => ({
      ...prev,
      [title]: description,
    }));
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeTask(e.target.name, e.target.value);
  };

  const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChangeTask(e.target.name, e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEdit) {
      const newTask = {
        id: Number(params.id),
        title: task.title,
        description: task.description,
      };

      dispatch(editTask(newTask));
      navigate('/');

      return;
    }

    dispatch(addTask(task));
    navigate('/');
  };

  return (
    <form
      className="card bg-base-100 border-base-300 w-full border shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="card-body gap-4">
        <h2 className="card-title">{isEdit ? 'Edit task' : 'Create task'}</h2>

        <InputText
          name="title"
          label="Title"
          placeholder="Task title"
          onChange={handleChangeTitle}
          required
          defaultValue={task.title}
        />

        <InputTextArea
          name="description"
          label="Description"
          placeholder="Task description"
          onChange={handleChangeArea}
          required
          defaultValue={task.description}
        />

        <div className="card-actions justify-end pt-2">
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto"
            disabled={!task.title.trim() || !task.description.trim()}
          >
            {isEdit ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </div>
    </form>
  );
};
