import { configureStore } from "@reduxjs/toolkit";
import bookStoreReducer from "./bookStore.slice";
import wishlistReducer from "./wishlist.slice";
import bookStoreSuggestionReducer from "./bookStore.Suggestion.slice";

const store = configureStore({
  reducer: {
    bookStore: bookStoreReducer,
    wishlist:wishlistReducer,
    bookStoreSuggestion:bookStoreSuggestionReducer
  },
});

export default store;