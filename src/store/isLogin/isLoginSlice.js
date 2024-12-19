import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

const isLoginSlice = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    inLogin: (state) => {
      state.isLogin = true;
    },
    outLogin: (state) => {
      state.isLogin = false;
    },
  },
});

export const { inLogin, outLogin} = isLoginSlice.actions;

export default isLoginSlice.reducer;