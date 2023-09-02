import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    cardAdded(state, action) {
      state.push(action.payload);
    },
    reset(state) {
      state.length = 0;
    },
    popIt(state) {
      state.pop();
    },
    deleteThis(state, action){
      return state.filter(( item ) => item.id !== action.payload );
    }
  },
});

export const { cardAdded, reset, popIt, deleteThis } = cardSlice.actions;

export const allFlashcards = (state) => state.flashcards;

export default cardSlice.reducer;
