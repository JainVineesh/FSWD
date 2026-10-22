import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const initialState = {
  items: [],
};
 
const roomBookingsSlice = createSlice({
  name: "roomBookings",
  initialState,
  reducers: {
    addRoomBooking: (state, action) => {
      state.items.push({
        id: nanoid(),
        guestName: action.payload.guestName,
        roomRatePerNight: action.payload.roomRatePerNight,
        numberOfNights: action.payload.numberOfNights,
      });
    },
  },
});
 
export const { addRoomBooking } = roomBookingsSlice.actions;
export default roomBookingsSlice.reducer;
