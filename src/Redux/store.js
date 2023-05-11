import createSagaMiddleware from "redux-saga";
import { legacy_createStore, applyMiddleware } from "redux";
import { todoReducer } from "./Reducers/TodoReducer";
import { rootSaga } from "./Saga/Todosaga";

const sagaMiddleware = createSagaMiddleware();
export const store = legacy_createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
