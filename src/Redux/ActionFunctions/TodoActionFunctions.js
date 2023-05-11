import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
} from "../Actions/TodoActions";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    todo,
  },
});

export const updateTodo = (updatedTodo) => {
//   console.log(updatedTodo);
  return {
    type: UPDATE_TODO,
    payload: {
      updatedTodo,
    },
  };
};

export const updateTodoSuccess = (updatedTodo) => {
    // console.log(updatedTodo);
    return {
      type: UPDATE_TODO_SUCCESS,
      payload: {
        updatedTodo,
      },
    };
  };

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const deleteTodoSuccess = (id) => {
    return {
      type: DELETE_TODO_SUCCESS,
      payload: id,
    };
  };

export const fetchTodo = () => {
  return {
    type: FETCH_TODO,
  };
};

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: todos,
  };
};
