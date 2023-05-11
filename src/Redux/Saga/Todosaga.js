import axios from "axios";
import {
  addTodo,
  addTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  fetchTodo,
  fetchTodosSuccess,
  updateTodo,
  updateTodoSuccess,
} from "../ActionFunctions/TodoActionFunctions";
import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
function* fetchTodosData() {
  try {
    console.log("In try block");
    const response = yield call(axios.get, "http://localhost:5000/todos");
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    //   yield put(fetchUsersError(error));
    console.log(error);
  }
}
function* addTodoData(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:5000/todos",
      action.payload.todo
    );
    yield put(addTodoSuccess(response.data));
  } catch (error) {
    // yield put(addUserError(error));
    console.log(error);
  }
}
function* updateTodoData(action) {
  try {
    // console.log(action.payload);
    const response = yield call(
      axios.put,
      `http://localhost:5000/todos/${action.payload.updatedTodo.id}`,
      action.payload.updatedTodo
    );
    yield put(updateTodoSuccess(response.data));
  } catch (error) {
    // yield put(addUserError(error));
    console.log(error);
  }
}
function* deleteTodoData(action) {
  try {
    // console.log(action.payload);
    const response = yield call(
      axios.delete,
      `http://localhost:5000/todos/${action.payload}`
    );
    yield put(deleteTodoSuccess(response.data));
    const res = yield call(axios.get, "http://localhost:5000/todos");
    yield put(fetchTodosSuccess(res.data));
  } catch (error) {
    // yield put(addUserError(error));
    console.log(error);
  }
}
function* watchFetchTodo() {
  yield takeEvery(fetchTodo().type, fetchTodosData);
}
function* watchAddTodo() {
  yield takeEvery(addTodo().type, addTodoData);
}
function* watchUpdateTodo() {
  // console.log("In Update Todo");
  yield takeEvery(updateTodo().type, updateTodoData);
}
function* watchDeleteTodo() {
  // console.log("In Update Todo");
  yield takeEvery(deleteTodo().type, deleteTodoData);
}
export function* rootSaga() {
  // yield takeEvery(fetchTodo().type, fetchTodosData);
  // yield takeEvery(addTodo().type, addTodoData);
  yield all([
    watchFetchTodo(),
    watchAddTodo(),
    watchUpdateTodo(),
    watchDeleteTodo(),
  ]);
}
