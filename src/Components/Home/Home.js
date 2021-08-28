import React from "react";
import { Header } from "../Header/Header";
import { Todo } from "../ToDo/Todo";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Todo />
    </div>
  );
};
