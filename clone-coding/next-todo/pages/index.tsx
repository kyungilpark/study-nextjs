import React from "react";
import { NextPage, GetServerSideProps } from "next";
import { getTodosAPI } from "../lib/api/todo";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

interface IProps {
  todos: TodoType[];
}

const index: NextPage<IProps> = ({ todos }) => {
  // console.log(process.env.NEXT_PUBLIC_API_URL, "클라이언트");
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // console.log(process.env, "서버");
    const { data } = await getTodosAPI();
    return { props: { todos: data } };
  } catch (e) {
    console.log(e);
    return { props: { todos: [] } };
  }
};

export default index;
