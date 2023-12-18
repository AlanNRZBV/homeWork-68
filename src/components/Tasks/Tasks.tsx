import { addTitle, resetTitle } from './tasksItemSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import React, { useEffect } from 'react';
import { postTask } from './tasksItemThunks.ts';
import { fetchTasks } from './tasksThunks.ts';
import TasksItem from './TasksItem.tsx';

const Tasks = () => {
  const dispatch: AppDispatch = useDispatch();
  const tasksObj = useSelector((state: RootState) => state.tasks);
  const isTasksLoading = useSelector(
    (state: RootState) => state.tasks.isLoading,
  );
  const taskTitle = useSelector((state: RootState) => state.tasksItem.title);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addTitle(e.target.value));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(postTask());
    dispatch(fetchTasks());
    dispatch(resetTitle());
  };

  return (
    <div>
      {isTasksLoading
        ? 'Please wait, we are dispatching your tasks'
        : tasksObj.tasks.map((item) => (
            <TasksItem
              key={item.id}
              title={item.title}
              status={item.status}
              id={item.id}
            />
          ))}
      <form
        onSubmit={submitHandler}
        className="border rounded flex flex-col p-3"
      >
        <h4>Add a task!</h4>
        <label htmlFor="title">Title</label>
        <input
          onChange={changeHandler}
          type="text"
          name="title"
          id="title"
          className="border rounded"
          value={taskTitle}
        />
        <button type="submit" className="border bg-amber-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tasks;
