import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    score:0
}

const scoreSlice = createSlice({
    name:"score",
    initialState,
    reducers: {
        increment:(state)=>{
            state.score = state.score + 1
        },
        decrement:(state) => {
            state.score = state.score - 1
        },
        reset:(state)=>{
            state.score = 0
        },
    }
})

export const {increment, decrement, reset} = scoreSlice.actions
export default scoreSlice.reducer