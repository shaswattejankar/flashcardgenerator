import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Actions and Reducers are defined here
const cardSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    // to Add data to Store
    cardAdded(state, action) {
      state.push(action.payload);
    },
    // to delete an item from Store whose id is passed in the payload
    deleteThis(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

//exporting actions, reducer and all the data of Flashcards
export const { cardAdded, deleteThis } = cardSlice.actions;
export const allFlashcards = (state) => state.flashcards;
export default cardSlice.reducer;
