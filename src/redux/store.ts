import { configureStore } from "@reduxjs/toolkit";


import logInSlice from "./features/logInSlice";
import categorySlice from "./features/categorySlice";
import wishlistSlice from "./features/wishListSlice";
import productSlice from "./features/productSlice";

export const store = () => {
  return configureStore({
    reducer: {
      signIn : logInSlice,
      category : categorySlice,
      wish: wishlistSlice,
      product : productSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
