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

const initialTodoState = {
  todos: [],
  error: "",
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
      };
    case ADD_TODO_SUCCESS:
      const newTodo = action.payload.todo;
      return { ...state, todos: [...state.todos, newTodo] };
    case UPDATE_TODO:
      return {
        ...state,
      };
    case UPDATE_TODO_SUCCESS:
      const updatedTodo = action.payload.updatedTodo;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return { ...todo, ...updatedTodo };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };
    case DELETE_TODO:
      return {
        ...state,
      };
    case DELETE_TODO_SUCCESS:
        const deletedTodoId = action.payload;
        const filteredTodos = state.todos.filter(
          (todo) => todo.id !== deletedTodoId
        );
        return {
          ...state,
          todos: filteredTodos,
        };
    default:
      return state;
  }
};
