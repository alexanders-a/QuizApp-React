import { compose, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import quizSlice from "./features/quiz/quizSlice";
import selectLinkSlice from "./features/quiz/selectLinkSlice";
import rootSaga from "./sagas/rootSaga";

const saga = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = configureStore({
  reducer: {
    selectCategory: selectLinkSlice,
    quiz: quizSlice,
  },
  composeEnhancers,
  middleware: [saga],
});

saga.run(rootSaga);
