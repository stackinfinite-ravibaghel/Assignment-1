import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IWishList { 
  wishList: [];
}

// Define the initial state using that type
const initialState: IWishList = {
  wishList: [],
};

export const essaySlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    // This state is for demo purpose
    setWishList: (state, action: PayloadAction<[]>) => {
      state.wishList = action.payload;
    },
  },
});
export const { setWishList } = essaySlice.actions;

export default essaySlice.reducer;
