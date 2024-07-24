import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  _id : string;
  name: string;
  email:string;
}

const initialState: User = {
  _id: "",
  name: "",
  email: "",
} 

export const logInSlice = createSlice({
  name: 'signInSlice',
  initialState,
  reducers: {
    // This state is for demo purpose
    setSignIn: (state, action: PayloadAction<User>) => {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});
export const { setSignIn } = logInSlice.actions;

export default logInSlice.reducer;