import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 1,
}

export const acountSlice = createSlice({
  name: 'acount',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = acountSlice.actions

export default acountSlice.reducer