import React from 'react'
import todos from '../redux/modules/todos';
import { useState } from 'react';

import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

function TodoList() { 
    const [todos, setTodos] = useState(initialState);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  return (
    <div>
      <h2>{todos.isDone ? "DONELIST" : "TODOLIST"}</h2>
      {todos
        .filter(function (item) {
          return item.isDone === isDone;
        })
        .map(function (todos) {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
              key={todos.id}
            >
              <p>{todos.id}</p>
              <p>{todos.title}</p>
              <p>{todos.contents}</p>
              <p>{todos.isDone.toString()}</p>
              <button
                onClick={function () {
                  const newTodos = todos.filter(
                    (filteredTodo) => filteredTodo.id !== todos.id
                  );
                  setTodos(newTodos);
                }}
              >
                삭제
              </button>
              <button
                onClick={function () {
                  const newTodos = todos.map(function (item) {
                    if (item.id === todos.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                {todos.isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;