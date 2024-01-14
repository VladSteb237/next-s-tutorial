"use client";
import React from "react";
import { deleteTasks } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "Pending..." : "Delete"}
    </button>
  );
};

const DeleteForm = (props) => {
  const { id } = props;
  return (
    <form action={deleteTasks}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};

export default DeleteForm;
