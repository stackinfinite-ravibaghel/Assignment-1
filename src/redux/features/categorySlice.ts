import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Category {
  categoryList : [];
}

const initialState: Category = {
  categoryList : [],
} 

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    // This state is for demo purpose
    setCategory: (state, action: PayloadAction<[]>) => {
      state.categoryList = action.payload;
    },
  },
});
export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;