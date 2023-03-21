import { put, call, takeEvery, all, delay } from "redux-saga/effects";
import { fetchQuizData } from "../../../services/api/QuizApi";
import { getQuizDataSuccess } from "../../features/quiz/quizSlice";

function* quizWatcher() {
  yield takeEvery("quiz/getQuizData", getQuizDataSaga);
}

function* getQuizDataSaga(action) {
  const response = yield call(fetchQuizData, action.payload);
  // yield delay(2000);

  if (response) {
    yield put(getQuizDataSuccess(response));
  }
}

export default function* postSaga() {
  yield all([quizWatcher()]);
}
