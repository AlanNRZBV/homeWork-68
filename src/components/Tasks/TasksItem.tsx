import { TasksItemState } from './tasksItemSlice.ts';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from './tasksItemThunks.ts';
import { AppDispatch } from '../../app/store.ts';
import { changeTaskStatus, removeTask } from './tasksSlice.ts';
import { updateTaskStatus } from './tasksThunks.ts';

const TasksItem: FC<TasksItemState> = ({ title, status, id }) => {
  const dispatch: AppDispatch = useDispatch();

  const changeHandler = () => {
    dispatch(changeTaskStatus(id));
    dispatch(updateTaskStatus(id));
  };

  const deleteHandler = async () => {
    await dispatch(deleteTask(id));
    dispatch(removeTask(id));
  };

  return (
    <div className="border rounded">
      <p>Title: {title}</p>
      <input
        onChange={changeHandler}
        type="checkbox"
        checked={status}
        id="status"
        name="status"
      />
      <button
        onClick={deleteHandler}
        className="border rounded px-1"
        type="button"
      >
        delete
      </button>
    </div>
  );
};

export default TasksItem;
