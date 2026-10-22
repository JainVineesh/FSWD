import * as yup from "yup";
 
const roomBookingSchema = yup.object({
  guestName: yup.string().required("Guest name is required"),
  roomRatePerNight: yup
    .number()
    .typeError("Room rate must be a number")
    .positive("Room rate must be greater than 0")
    .required("Room rate is required"),
  numberOfNights: yup
    .number()
    .typeError("Number of nights must be a number")
    .integer("Number of nights must be a whole number")
    .min(1, "At least 1 night is required")
    .max(30, "Cannot exceed 30 nights")
    .required("Number of nights is required"),
});
 
export default roomBookingSchema;
