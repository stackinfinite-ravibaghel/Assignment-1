import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./features/wishlistSlice";

export const store = () => {
  return configureStore({
    reducer: {
      wish: wishlistSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
