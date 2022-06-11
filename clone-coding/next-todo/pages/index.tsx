import React from "react";
import { NextPage, GetServerSideProps } from "next";
import { getTodosAPI } from "../lib/api/todo";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IProps {
  todos: TodoType[];
}

const index: NextPage<IProps> = () => {
  // console.log(process.env.NEXT_PUBLIC_API_URL, "클라이언트");
  return <TodoList todos={[]} />;
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    console.log(store);
    try {
    // console.log(process.env, "서버");
      const { data } = await getTodosAPI();
      store.dispatch(todoActions.setTodo(data));
      return { props: { todos: data } };
    } catch (e) {
      console.log(e);
      return { props: { todos: [] } };
    }
  }
);

export default index;
