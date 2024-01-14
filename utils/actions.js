"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTasks = async (formData) => {
  const content = formData.get("content");
  console.log(content);
  await prisma.task.create({
    data: {
      content: content,
    },
  });
  revalidatePath("/tasks"); //
};

export const createTasksCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    //console.log(content);
    await prisma.task.create({
      data: {
        content: content,
      },
    });
    revalidatePath("/tasks"); //
    return { message: "success" };
  } catch (error) {
    //console.log(error);
    return { message: "error" };
  }
};

export const deleteTasks = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = formData.get("id");
  console.log(id);
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/tasks"); // dele
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content: content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};