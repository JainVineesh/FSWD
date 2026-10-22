import { useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
 
function RoomBookingList() {
  const items = useSelector((state) => state.roomBookings.items);
 
  return (
    <Container className="mt-4">
      <h2>Room Bookings</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Room Rate Per Night</th>
            <th>Number of Nights</th>
            <th>Payable</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.guestName}</td>
              <td>{item.roomRatePerNight}</td>
              <td>{item.numberOfNights}</td>
              <td>{item.roomRatePerNight * item.numberOfNights}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
 
export default RoomBookingList;
