import TasksItem from './TasksItem.tsx';
import { addTitle } from './tasksItemState.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store.ts';
import React from "react";

const Tasks = () => {
  const dispatch: AppDispatch = useDispatch();

  const changeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(addTitle(e.target.value))
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }

  return (
    <div>
      <TasksItem />
      <form onSubmit={submitHandler} className="border rounded flex flex-col p-3">
        <h4>Add a task!</h4>
        <label htmlFor="title">Title</label>
        <input
          onChange={changeHandler}
          type="text"
          name="title"
          id="title"
          className="border rounded"
        />
      </form>
    </div>
  );
};

export default Tasks;