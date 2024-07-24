import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  productList : any[];
  pagination: {
    totalProducts: number;
    totalPages: number;
    currentPage: number;
  };
}

const initialState: Product = {
  productList : [],
  pagination: {
    totalProducts: 0,
    totalPages: 0,
    currentPage: 1,
  },
} 

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<{ products: any[], pagination: any }>) => {
      state.productList = action.payload.products;
      state.pagination = {
        totalProducts: action.payload.pagination.totalProducts,
        totalPages: action.payload.pagination.totalPages,
        currentPage: action.payload.pagination.currentPage,
      };
    },
  },
});
export const { setProduct } = productSlice.actions;

export default productSlice.reducer;