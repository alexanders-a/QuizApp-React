import { createSlice } from "@reduxjs/toolkit";

export const selectLink = createSlice({
  name: "select",
  initialState: {
    category: "",
  },
  reducers: {
    selectCategory: (state, { payload }) => {
      state.category = { payload };
    },
  },
});

export const { selectQuiz, selectCategory } = selectLink.actions;

export default selectLink.reducer;
