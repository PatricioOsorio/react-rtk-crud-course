import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { InputText } from './InputText';
import { InputTextArea } from './InputTextArea';
import { addTask } from '@features/tasks/taskSlice';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: '',
    description: '',
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

    dispatch(addTask(task));
  };

  return (
    <form
      className="card bg-base-100 border-base-300 w-full border shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="card-body gap-4">
        <h2 className="card-title">Create task</h2>

        <InputText
          name="title"
          label="Title"
          placeholder="Task title"
          onChange={handleChangeTitle}
          required
        />

        <InputTextArea
          name="description"
          label="Description"
          placeholder="Task description"
          onChange={handleChangeArea}
          required
        />

        <div className="card-actions justify-end pt-2">
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto"
            disabled={!task.title.trim() || !task.description.trim()}
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};
