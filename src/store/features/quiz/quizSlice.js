import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  loading: false,
  error: "",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    getQuizData: (state) => {
      state.loading = true;
    },
    getQuizDataSuccess: (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    },
    getQuizDataError: (state, payload) => {
      state.loading = false;
      state.error = payload;
      state.questions = null;
    },
  },
});

export const { getQuizData, getQuizDataSuccess, getQuizDataError } =
  quizSlice.actions;

export default quizSlice.reducer;
