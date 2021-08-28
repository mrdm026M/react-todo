import React from "react";
import { Header } from "../Header/Header";
import { Todo } from "../ToDo/Todo";

export const Home = () => {
  return (
    <div className="flex flex-col h-screen text-white bg-darkGrey Home">
      <Header />
      <Todo />
    </div>
  );
};
