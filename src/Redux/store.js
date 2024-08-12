import { configureStore } from "@reduxjs/toolkit";
import bookStoreReducer from "./bookStore.slice";
import wishlistReducer from "./wishlist.slice";

const store = configureStore({
  reducer: {
    bookStore: bookStoreReducer,
    wishlist:wishlistReducer
  },
});

export default store;