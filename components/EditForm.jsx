import { editTask } from "@/utils/actions";
import React from "react";

const EditForm = (props) => {
  const { task } = props;
  const { id, content, completed } = task;
  //console.log(task);
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg">
      <input type="hidden" name="id" value={id} />
      {/* content */}
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      {/* completed */}
      <div className=" form-control mb-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            name="completed"
            id="completed"
            className=" checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-sm btn-block">
        edit
      </button>
    </form>
  );
};

export default EditForm;
