import { all } from "redux-saga/effects";
import quizSaga from "./quiz/quizSaga";

export default function* rootSaga() {
  yield all([quizSaga()]);
}
