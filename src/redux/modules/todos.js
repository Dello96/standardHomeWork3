// import uuid from "react-uuid";
import { type } from "@testing-library/user-event/dist/type";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = () => {
  return {
    type: ADD_TODO,
  }
}

export const deleteTodo = () => {
  return {
    type: DELETE_TODO,
  }
}

export const switchTodo = () => {
  return {
    type: SWITCH_TODO,
  }
}

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state]; //TODO: 여기 작성

    case "DELETE_TODO":
      return; //TODO: 여기 작성

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
