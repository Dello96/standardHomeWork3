import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";

const Home = () => {


const dispatch = useDispatch();
  return <div>
    <header>나만의 Todo-List!</header>
    <TodoList />
    <body>
      <div>Todo List</div>
      <div>Done List</div>
    </body>
  </div>;
};

export default Home;
