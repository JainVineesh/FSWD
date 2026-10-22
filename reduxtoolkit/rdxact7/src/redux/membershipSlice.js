import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={items:[]}

const membershipSlice = createSlice({
    name:"membershipData",
    initialState,
    reducers:{
        addMembership:(state, action)=>{
            state.items.push({
                id:nanoid(),
                memberName: action.payload.memberName,
                monthlyFee: action.payload.monthlyFee,
                numberOfMonths: action.payload.numberOfMonths
            })
        }
    }
})
export const {addMembership} = membershipSlice.actions
export default membershipSlice.reducer