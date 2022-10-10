import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    addAmount: (state, action) => {
      // let's make sure the amout is a number before addin' it to the counter
      state.counter += Number(action.payload) || 0;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

export const selectCount = (state) => state.counter.counter;

export const { increment, decrement, addAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;
