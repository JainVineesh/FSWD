import { configureStore } from "@reduxjs/toolkit";
import roomBookingsReducer from "./roomBookingsSlice";
 
const store = configureStore({
  reducer: {
    roomBookings: roomBookingsReducer,
  },
});
 
export default store;
