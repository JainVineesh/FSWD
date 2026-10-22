import { configureStore } from "@reduxjs/toolkit"
import membershipsReducer from "./membershipSlice"
 
const store = configureStore({
  reducer: {
    memberships: membershipsReducer,
  },
})
 
export default store