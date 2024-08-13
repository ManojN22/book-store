import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookFetchAPI } from "../API";

export const fetchResults = createAsyncThunk(
    'bookStore/fetch',
    async (bookname) => {
      let data = await bookFetchAPI(bookname);
      return data;
    },
  )
const initialState = {
    data: [],
    status: 'idle',
  };
export const bookStoreSlice = createSlice({
  name: "bookStore",
  initialState,
  reducers: {
    setData: (state,actions) => {
      state.data = [actions.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action);
        state.data = action.payload.items;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setData } = bookStoreSlice.actions;
export default bookStoreSlice.reducer;