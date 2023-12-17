import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';

const TasksItem = () => {
  const taskTitle = useSelector((state: RootState) => state.task.title);
  const taskStatus = useSelector((state: RootState) => state.task.status);

  return (
    <div className="border rounded">
      <p>Title: {taskTitle}</p>
      <input type="checkbox" checked={taskStatus} />
    </div>
  );
};

export default TasksItem;