import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    data: []
    },
  reducers: {
    addToList: (state,actions) => {

      if(!(state.data.includes(actions.payload)))
      {
      state.data = [...state.data ,actions.payload];
      }
      else
      {
        alert("already exist");
      }

    },
    deleteFromList:(state,actions)=>{

      if(state.data.includes(actions.payload))
        {
        state.data = [...state.data].filter(data =>actions.payload!==data);
        }
        else
        {
          alert("Doesn't exist");
        }

    }
  }
});

// Action creators are generated for each case reducer function
export const { addToList,deleteFromList } = wishlistSlice.actions;

export default wishlistSlice.reducer;