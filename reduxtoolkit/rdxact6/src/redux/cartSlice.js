import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[
        {id:"c1", name:"Note Book", price:1.5, quantity:2},
        {id:"c2", name:"Pen Set", price:3, quantity:1},
    ]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        increaseQuantity:(state, action)=>{
            const item = state.items.find((i)=>i.id===action.payload)
            if(item)
                item.quantity += 1
        },
        decreaseQuantity:(state, action)=>{
            const item = state.items.find((i)=>i.id===action.payload)
            if(item && item.quantity>1)
                item.quantity -= 1
        }
    }
})
const selectCartTotal = (state) => 
    state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)


export const {increaseQuantity, decreaseQuantity } = cartSlice.actions
export {selectCartTotal}
export default cartSlice.reducer