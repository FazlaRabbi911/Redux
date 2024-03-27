import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    datastore:(state,action)=>{
        state.value = action.payload
    },
    pluse:(state)=>{
        state.value += 1
    },
    Minus:(state)=>{
        state.value -=2
        console.log(state.value)
    },
    Multiply:(state)=>{
        state.value *=2
        console.log(state.value)
    },
    devide:(state)=>{
        state.value = state.value / 2
    }
  },
})
// Action creators are generated for each case reducer function
export const { datastore , pluse, Minus, Multiply,devide} = counterSlice.actions
export default counterSlice.reducer