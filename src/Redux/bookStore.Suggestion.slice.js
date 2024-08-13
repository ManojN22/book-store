import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookFetchAPI } from "../API";

export const bookStoreSuggestionfetchResults = createAsyncThunk(
    'bookStoreSuggestion/fetch',
    async (bookname) => {
      let data = await bookFetchAPI(bookname);
      return data;
    },
  )
const initialState = {
    data: [],
    status: 'idle',
    active:true,
  };
export const bookStoreSuggestionSlice = createSlice({
  name: "bookStore",
  initialState,
  reducers: {
    activate:(state)=>{
      state.active = true;
    },
    deactivate:(state)=>{
      state.active = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookStoreSuggestionfetchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(bookStoreSuggestionfetchResults.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action);
        state.data = action.payload.items;
      });
  },
});

export const {activate,deactivate} = bookStoreSuggestionSlice.actions;
export default bookStoreSuggestionSlice.reducer;