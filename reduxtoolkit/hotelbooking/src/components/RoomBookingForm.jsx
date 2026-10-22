import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form, FormGroup, Label, Input, FormFeedback, Button } from "reactstrap";
import roomBookingSchema from "../schemas/roomBookingSchema";
import { addRoomBooking } from "../redux/roomBookingsSlice";
 
function RoomBookingForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(roomBookingSchema),
  });
 
  const onSubmit = (data) => {
    dispatch(addRoomBooking(data));
    reset();
  };
 
  const { ref: guestNameRef, ...guestNameField } = register("guestName");
  const { ref: roomRatePerNightRef, ...roomRatePerNightField } = register("roomRatePerNight", { valueAsNumber: true });
  const { ref: numberOfNightsRef, ...numberOfNightsField } = register("numberOfNights", { valueAsNumber: true });
 
  return (
    <Container className="mt-4">
      <h2>Hotel Room Booking</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="guestName">Guest Name</Label>
          <Input
            id="guestName"
            type="text"
            invalid={!!errors.guestName}
            innerRef={guestNameRef}
            {...guestNameField}
          />
          <FormFeedback>{errors.guestName?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="roomRatePerNight">Room Rate Per Night</Label>
          <Input
            id="roomRatePerNight"
            type="number"
            step="0.01"
            invalid={!!errors.roomRatePerNight}
            innerRef={roomRatePerNightRef}
            {...roomRatePerNightField}
          />
          <FormFeedback>{errors.roomRatePerNight?.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="numberOfNights">Number of Nights</Label>
          <Input
            id="numberOfNights"
            type="number"
            invalid={!!errors.numberOfNights}
            innerRef={numberOfNightsRef}
            {...numberOfNightsField}
          />
          <FormFeedback>{errors.numberOfNights?.message}</FormFeedback>
        </FormGroup>
        <Button color="primary" type="submit">Add Booking</Button>
      </Form>
    </Container>
  );
}
 
export default RoomBookingForm;
