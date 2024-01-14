"use client";
import React, { useEffect } from "react";
import { createTasksCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item ml-1 uppercase"
      disabled={pending}>
      {pending ? "please wait..." : "create new task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTasksCustom, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error!");
      return;
    }
    if (state.message) {
      toast.success("Task Created Success!");
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      <div className="join w-full">
        <input
          type="text"
          name="content"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;
