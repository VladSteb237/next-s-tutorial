import React from "react";
import { createTasks } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTasks}>
      <div className="join w-full">
        <input
          type="text"
          name="content"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          required
        />
        <button type="submit" className="btn btn-primary join-item ml-1">
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
